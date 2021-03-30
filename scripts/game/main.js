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
import { saves } from './saves.js'
import { infobox } from '../infobox.js'

global.$ = require('jquery')

global.pauseGame = false
global.pressCount = 0
global.lastPlayerPos = null
global.lastCratePos = null

let map = location.href.substr(location.href.indexOf('?') + 1)

if (map.includes('sav')) {
    $('main').append('<button id="save">Save</button><button id="surrender">Surrender</button>')
    global.pressCount = map.split(',')[3]
}

levelgen.main(map)
events.main()
events.game_end_check(map)
timer.main(map)

$('#reset').on('click', function() {
    controls.reset()
})

$('#undo').on('click', function() {
    controls.undo()
})

$('#save').on('click', function() {
    global.pauseGame = true
    saves.game(map, map.split(',')[1], 0, global.pressCount, timer.get_end_time().replace(/:/g, '-'), true)
    infobox.createInfobox('saved')
})

$('#surrender').on('click', function() {
    global.pauseGame = true
    infobox.createInfobox('surrender', map)
})
