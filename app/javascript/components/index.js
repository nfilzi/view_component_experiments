// Using ViewComponent with sidecar folders structure

function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context("../../components", true, /_component.js$/))

const componentsCSScontext = require.context("../../components", true, /component.css$/)
importAll(componentsCSScontext)

