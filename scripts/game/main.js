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

global.$ = require('jquery')

global.pressCount = 0
global.lastPlayerPos = null
global.lastCratePos = null

let map = window.location.href.substr(window.location.href.indexOf('?') + 1)
console.log(map)

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
    console.log(map)
    //global score - [score tej mapy] ale to Iwo musisz zrobić ty bo nie wiem jak ty przechowujesz sobie score mapy
    //w przypadku przejścia na następny lvl:  
    //save.game(map, nr następnego pooziomu, global.score - [utracone gwiazdki czy jak to tam masz rozwiązane, bo jak odejmujesz w locie przy przekroczeniu czasu itp to po prostu global.score], 0, 00-00-00)
    save.game(map, map.split(',')[1], 0, global.pressCount, $('#timer').html().replace(':', '-').replace(':', '-'))
})

$('#surrender').on('click', function() {

})