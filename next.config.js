const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  return {
    assetPrefix: ".",
    trailingSlash: true
  };
};

