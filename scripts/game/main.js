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
import { save } from './save.js'
import { infobox } from '../infobox.js'
import { hall } from './toHall.js'

global.$ = require('jquery')

global.pressCount = 0
global.lastPlayerPos = null
global.lastCratePos = null

let map = window.location.href.substr(window.location.href.indexOf('?') + 1)

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
    //(saveName, level, stars, moves, time)
    save.game(map, map.split(',')[1], 0, global.pressCount, $('#timer').html().replace(':', '-').replace(':', '-'), true)
    infobox.createInfobox('saved')
})

$('#surrender').on('click', function() {
//iwo dodaj tu infoboxa który przyjmuje nick jako input i przekierowuje potem do menu
    hall.send(map, 'Test')
    
})
