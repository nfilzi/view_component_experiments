const { environment } = require('@rails/webpacker')

const sassLoader = environment.loaders.get('sass')
const cssLoader  = sassLoader.use.find(loader => loader.loader === 'css-loader')

const path = require('path')

cssLoader.options = Object.assign(cssLoader.options, {
  modules: {
    context:        path.resolve(__dirname, "../../app/components"),
    localIdentName: '[path]-[name]__[local]'
  }
})

module.exports = environment
