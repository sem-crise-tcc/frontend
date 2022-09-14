const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2965D5',
              '@link-color': '#2965D5'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
