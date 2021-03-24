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

global.pressCount = 0
global.lastPlayerPos = null
global.lastCratePos = null
if ((window.location.href.substr(window.location.href.indexOf('?') + 1))[0] == 0) {

    let map = window.location.href.substr(window.location.href.indexOf('?') + 2)
    console.log(map)

    levelgen.main(map)
    events.main()
    events.game_end_check(map)

} else if ((window.location.href.substr(window.location.href.indexOf('?') + 1))[0] == 1) {

    let map = window.location.href.substr(window.location.href.indexOf('?') + 2)
    console.log(map)

    levelgen.main(map)
    events.main()
    events.game_end_check(map)

}

timer.main()

$('#reset').on('click', function () {
    controls.reset()
})

$('#undo').on('click', function () {
    controls.undo()
})