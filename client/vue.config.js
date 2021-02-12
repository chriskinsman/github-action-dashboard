const configureAPI = require('../configure');

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "Action Dashboard"
      return args;
    })
  },
  devServer: {
    before: configureAPI
  },

  transpileDependencies: [
    'vuetify'
  ]
};
