const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    distDir: 'build',
    future: {
        webpack5: true,
    },
  };
};

