const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    assetPrefix: ".",
    distDir: 'build',
    future: {
        webpack5: true,
    },
  };
};

