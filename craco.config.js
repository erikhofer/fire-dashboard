const CracoAntDesignPlugin = require('craco-antd')
const CracoStyledJsxPlugin = require('craco-styled-jsx')

module.exports = {
  plugins: [
    { plugin: CracoAntDesignPlugin },
    {
      plugin: CracoStyledJsxPlugin,
      options: {
        sass: false, // Required node-sass to enable this option
        cssFileSupport: true, // Allow to write css in a standalone file
        cssFileTest: /\.styled\.(s)css$/
      }
    }
  ]
}
