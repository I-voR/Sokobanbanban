/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

let map = window.location.href.substr(window.location.href.indexOf('?') + 1, 3)

console.log(map)
