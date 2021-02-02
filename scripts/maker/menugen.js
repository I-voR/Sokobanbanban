/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const MenuGen = {
    menugen: function () {
        let fs = require('fs')
        let files = fs.readdirSync('./assets/map_tiles')
        let i
        let l

        for (i = 0; files.length > i; i++) {
            $('#tiles-picker').append(
                '<button class="icons" style=" background: url(../assets/map_tiles/' + files[i] + '); margin-top: 9px; margin-left:' + (i == 0 ? (((500 - files.length * 32) / files.length) / 2) : ((500 - files.length * 32) / files.length)) + 'px" id="' + files[i].split('.', 2)[0] + (files[i].split('.', 2)[1] == 'col' ? '-' : '') + '"></button>')
        }

        for (i = 0; i < 20; i++) {
            for (l = 0; l < 30; l++) {
                $('#level-border').append('<div class="grid-tile" style="left:' + l * 32 + 'px; top:' + i * 32 + 'px"> </div>')
            }
        }
    }
}
