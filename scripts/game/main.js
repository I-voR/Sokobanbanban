/* eslint-disable require-jsdoc */

import { levelgen } from './levelgen.js'
import { events } from './events.js'

global.jQuery = require('jquery')
global.$ = global.jQuery

let map = window.location.href.substr(window.location.href.indexOf('?') + 1, 3)

console.log(map)

levelgen.main()
events.main()