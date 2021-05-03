const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  
  return {
    ...defaultConfig,
    assetPrefix: ".",
    trailingSlash: true
  };
};

