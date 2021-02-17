// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()

const context = require.context("controllers", true, /_controller\.js$/)

// Using ViewComponent with sidecar folders structure for stimulus controllers
const contextComponents = require.context("../../components", true, /controller.js$/)

application.load(
  definitionsFromContext(context).concat(
    definitionsFromContext(contextComponents)
  )
)
