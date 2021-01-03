const { environment } = require('@rails/webpacker')

const cssRule   = environment.loaders.get('css')
const cssLoader = cssRule.use.find(loader => loader.loader === 'css-loader')

const path = require('path')

cssLoader.options = Object.assign(cssLoader.options, {
  modules: {
    context:        path.resolve(__dirname, "../../app/components"),
    localIdentName: '[path]-[name]__[local]'
  }
})

module.exports = environment
