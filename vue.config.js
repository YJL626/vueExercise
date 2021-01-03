const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "",
  outputDir: "docs",
  chainWebpack: (config) => {
    config.resolve.alias.set("network", path.resolve(__dirname, "src/network"));
  },
};
