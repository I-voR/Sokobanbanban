/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery
let selectedtile

export const TilePainter = {
    tilepaint: function (tile) {
        let tilefilename = (tile.slice(-1) == '-' ? tile.slice(0, -1) : tile) + '.' + (tile.slice(-1) == '-' ? 'col' : '') + '.png">'
        let defaultImgLocation = `<img src="${location.href.substring(0, location.href.indexOf('Soko'))}Sokobanbanban/assets/map_tiles/`
        if (selectedtile == tile) {
            selectedtile = null
            $('.grid-tile').off('mousedown')
            $('.grid-tile').off('mouseup')
            $('.grid-tile').off('mousemove')
            $('.grid-tile').off('click')
        } else {
            $('.grid-tile').on('click', function () {
                $(document.elementFromPoint(window.event.clientX, window.event.clientY)).empty()
                $(document.elementFromPoint(window.event.clientX, window.event.clientY)).append(defaultImgLocation + tilefilename)
            })
            $('.grid-tile').on('mousedown', function () {
                let lastElement
                $('.grid-tile').on('mousemove', function () {
                    if (lastElement != document.elementFromPoint(window.event.clientX, window.event.clientY)) {
                        $(document.elementFromPoint(window.event.clientX, window.event.clientY)).empty()
                        $(document.elementFromPoint(window.event.clientX, window.event.clientY)).append(defaultImgLocation + tilefilename)
                    }
                    $('.grid-tile').on('mouseup', function () { $('.grid-tile').off('mousemove') })
                    $('#level-border').on('mouseleave', function () { $('.grid-tile').off('mousemove') })
                    lastElement = document.elementFromPoint(window.event.clientX, window.event.clientY)
                })

                $('.grid-tile').mouseup(function () { $('.grid-tile').off('mousemove') })
                $('#level-border').mouseleave(function () { $('.grid-tile').off('mousemove') })
            })
            selectedtile = tile
        }
    }
}
