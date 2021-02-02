/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery
let selectedtile

export const TilePainter = {
    tilepaint: function (tile) {
        let tilefilename = (tile.slice(-1) == '-' ? tile.slice(0, -1) : tile) + "." + (tile.slice(-1) == '-' ? 'col' : '') + '.png'
        if (selectedtile == tile || selectedtile == undefined || selectedtile == null) {

        } else {

            $('.grid-tile').click(function () {
                console.log($(this).id)
                $(this).append('<img src="../assets/map_tiles/' + tilefilename + '">')
            })

        }



        console.log(tile)
        selectedtile = tile
    }
}
