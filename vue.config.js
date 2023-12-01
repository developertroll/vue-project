const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: { overlay: false },
  },
});
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-project" : "/",
  outputDir: "docs",
};
