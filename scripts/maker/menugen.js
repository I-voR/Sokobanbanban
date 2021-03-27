/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'

const fs = require('fs')

export const MenuGen = {
    menugen: () => {
        let path = funcs.cwd() + 'assets/map_tiles/'
        let files = fs.readdirSync(path)

        let i
        let l
        let tileButton
        let tile

        // $('#level-border').css('background-image', (`url(${path}Floor..png)`))
        for (i = 0; files.length > i; i++) {
            tileButton = $('<button>')
            tileButton
                .attr('class', 'icons')
                .css('outline', '0px blue solid')
                .css('background', ('url(' + path + files[i] + ')'))
                .attr('id', files[i].split('.', 2)[0] + (files[i].split('.', 2)[1] == 'col' ? '-' : ''))
            $('#tiles-picker').append(tileButton)
        }
        for (i = 0; i < 20; i++) {
            for (l = 0; l < 30; l++) {
                tile = $('<div>')
                tile
                    .attr('id', (i + '-' + l))
                    .attr('class', 'grid-tile')
                    .css('left', (l * 32) + 'px')
                    .css('top', (i * 32) + 'px')
                    .css('outline', '0px blue solid')
                    .append(`<img src="${path}Grass..png">`)
                $('#level-border').append(tile)
            }
        }
    }
}
