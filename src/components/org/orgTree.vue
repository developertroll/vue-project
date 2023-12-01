<template lang="">
  <el-tree :data="treeData" @node-click="onNodeClick"> </el-tree>
</template>
<script>
import { MemberList } from "@/composables/memberList";
export default {
  name: "orgTree",
  data() {
    return {
      MemberList,
    };
  },
  computed: {
    treeData() {
      MemberList.initRankList();
      const treeData = [];
      //MemberList.RankList에서 각각이 가진 team 값이 최상위 label이 되며, 그 안에 각각이 가지고 있는 children[name]이 children이 된다.
      for (const item of this.MemberList.RankList) {
        const seed = {
          label: item.team,
          children: [],
        };
        item.children.forEach((element) => {
          seed.children.push({
            label: element.name + "(" + element.rank + ")",
          });
        });

        treeData.push(seed);
      }
      return treeData;
    },
  },
  methods: {
    onNodeClick(data, node) {
      console.log(node);
      //node.childNodes.length가 0이면 자식이 없는 것이므로 해당 노드를 선택한 것임
      let emitter;
      if (node.childNodes.length === 0) {
        emitter = data.label;
      } else {
        console.log("부모 노드 선택");
        return;
      }
      //이름(직급) 형태로 온 emitter를 이름만 추출해서 emit해야함. 동일한 이름을 가지는 사람을 대비해서 직급으로 한번 더 체크하여 emit할 것임
      const name = emitter.split("(")[0];
      console.log(name);
      //(직급) 으로 들어온 값을 체크해야함
      const rank = emitter.split("(")[1].split(")")[0];
      console.log(rank);
      if (!name || !rank) return;
      const member = MemberList.searchWithNameRank(name, rank);
      console.log(member);
      this.$emit("node-click", member);
      //   console.log(emitter, "emitter");
      //   console.log(data.label);
      //   if (emitter === data.label) {
      //     this.$emit("node-click", emitter);
      //   }
    },
  },
};
</script>
<style lang=""></style>
