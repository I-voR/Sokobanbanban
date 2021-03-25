/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Main game module
*/

import { controls } from './controls.js'
import { levelgen } from './levelgen.js'
import { events } from './events.js'
import { timer } from './timer.js'

global.$ = require('jquery')

global.score = 0
global.pressCount = 0
global.lastPlayerPos = null
global.lastCratePos = null

let map = window.location.href.substr(window.location.href.indexOf('?') + 1)
console.log(map)

if (map.includes('sav')) {
    $('main').append('<button id="save">Save</button><button id="surrender">Surrender</button>')
    global.score = map.split(',')[2]
}

let requirements = levelgen.main(map)
events.main()
events.game_end_check(map, requirements)

timer.main(map)

$('#reset').on('click', function() {
    controls.reset()
})

$('#undo').on('click', function() {
    controls.undo()
})
