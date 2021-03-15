/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const controls = {
    reset: () => {
        location.reload()
    },
    undo: () => {
        if (global.lastPlayerPos != null) {
            global.pressCount--
            $('#player').css('left', global.lastPlayerPos[0] * 32 + 50)
            $('#player').css('top', global.lastPlayerPos[1] * 32 + 80)
        }

        if (global.lastCratePos != null) {
            $('.crates').eq(global.lastCratePos[2]).css('left', global.lastCratePos[0] * 32 + 50)
            $('.crates').eq(global.lastCratePos[2]).css('top', global.lastCratePos[1] * 32 + 80)
        }
    }
}