/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery
let selectedtile





export const TilePainter = {
    tilepaint: function (tile) {
        let tilefilename = (tile.slice(-1) == '-' ? tile.slice(0, -1) : tile) + "." + (tile.slice(-1) == '-' ? 'col' : '') + '.png'

        if (selectedtile == tile) {
            selectedtile = null
            $('.grid-tile').off('mousedown')
        } else {
            $('.grid-tile').mousedown(function () {
                let lastelement
                $('.grid-tile').mousemove(function () {
                    if (lastelement != document.elementFromPoint(window.event.clientX, window.event.clientY)) {
                        $(document.elementFromPoint(window.event.clientX, window.event.clientY)).empty()
                        $(document.elementFromPoint(window.event.clientX, window.event.clientY)).append('<img src="../assets/map_tiles/' + tilefilename + '">')
                    }
                    $('.grid-tile').mouseup(function () { $('.grid-tile').off('mousemove') })
                    console.log("mysz sie rusza")
                    lastelement = document.elementFromPoint(window.event.clientX, window.event.clientY)
                })
            })
            selectedtile = tile
        }
    }
}




/*
            async function continuosPainting() {
                let coloring=true
                while (coloring) {
                    if (f%2==0) {
                        await new Promise(r => setTimeout(r, 100));
                    }else{
                        coloring=false
                    }
                }
            }


*/
