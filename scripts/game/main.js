import { controls } from './controls.js'
import { levelgen } from './levelgen.js'
import { events } from './events.js'

global.jQuery = require('jquery')
global.$ = global.jQuery

let map = window.location.href.substr(window.location.href.indexOf('?') + 1)
console.log(map)

levelgen.main(map)
events.main()
events.game_end_check()

$('#reset').on('click', function() {
    controls.reset()
})
$('#undo').on('click', function() {
    controls.undo()
})
