const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  
  return {
    ...defaultConfig,
    exportPathMap: () => ({
      '/': { page: '/' },
    }),
    assetPrefix: "/shujathkhan.github.io",
  };
};

