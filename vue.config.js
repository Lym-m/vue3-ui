const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.ts", //入口
      template: "public/index.html", //模板
      filename: "index.html", //输出文件
    },
  },
  devServer: {
    port: 3000,
  },
});
