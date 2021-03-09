/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const MenuGen = {
    menugen: function () {
        let fs = require('fs')
        let files = fs.readdirSync('./assets/map_tiles')
        //console.log(files)
        let i
        let l
        let tileButton
        let tile

        $('#level-border').css("background", ('url(../assets/map_tiles/Floor..png)'))
        for (i = 0; files.length > i; i++) {
            tileButton = $('<button>')
            tileButton.attr('class', 'icons')
            tileButton.css('outline', '0px blue solid')
            tileButton.css('background', ('url(../assets/map_tiles/' + files[i] + ')'))
            tileButton.attr('id', files[i].split('.', 2)[0] + (files[i].split('.', 2)[1] == 'col' ? '-' : ''))
            $('#tiles-picker').append(tileButton)
        }
        for (i = 0; i < 20; i++) {
            for (l = 0; l < 30; l++) {
                tile = $('<div>')
                tile.attr('id', (i + '-' + l))
                tile.attr('class', 'grid-tile')
                tile.css('left', (l * 32) + 'px')
                tile.css('top', (i * 32) + 'px')
                tile.css('outline', '0px blue solid')
                tile.append('<img src="../assets/map_tiles/Grass..png">')
                $('#level-border').append(tile)
            }
        }
    }
}
