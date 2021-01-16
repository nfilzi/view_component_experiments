const { environment } = require('@rails/webpacker')
const path = require('path')

const sassRule   = environment.loaders.get('sass')
const sassLoader = sassRule.use.find(loader => loader.loader === 'sass-loader')

sassLoader.options = Object.assign(sassLoader.options, {
  includePaths: [path.resolve(__dirname, "../../app/assets/stylesheets")]
})

const cssLoader  = sassRule.use.find(loader => loader.loader === 'css-loader')

cssLoader.options = Object.assign(cssLoader.options, {
  modules: {
    context:        path.resolve(__dirname, "../../app/components"),
    localIdentName: '[path]-[name]__[local]'
  }
})

module.exports = environment
