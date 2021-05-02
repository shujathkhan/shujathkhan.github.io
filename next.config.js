const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    distDir: 'docs',
    future: {
        webpack5: true,
    },
  };
};

