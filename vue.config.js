const path = require("path");
module.exports = {
  publicPath: "",
  outputDir: "docs",
  chainWebpack: (config) => {
    config.resolve.alias.set("network", path.resolve(__dirname, "src/network"));
  },
};
