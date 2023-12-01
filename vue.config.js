const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: { overlay: false },
  },
});
module.exports = {
  outputDir: "docs",
};
