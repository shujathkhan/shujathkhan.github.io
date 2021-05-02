const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    assetPrefix: ".",
    trailingSlash: true,
    distDir: 'build',
    future: {
        webpack5: true,
    },
  };
};

