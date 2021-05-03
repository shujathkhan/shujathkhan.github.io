const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    assetPrefix: "https://cdn.statically.io/gh/shujathkhan/shujathkhan.github.io/gh-pages/",
    trailingSlash: true
  };
};

