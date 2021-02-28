/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery





export const save = {
    main: function () {
        $('.grid-tile').off('click')
        alert('Select player starting position.')

        save.playerPlace()

        $('.grid-tile').click(function () {
            console.log(this)
            let id = this.id
            if ($(this).children()[0].src.slice(-7, -4) != "col") {
                $('.grid-tile').off('mouseenter')
                $('.grid-tile').off('mouseleave')
                save.mapRead(id)
            } else {
                alert('Select floor instead of walls')
                save.playerPlace()
            }
        })



    },
    playerPlace: function () {
        $('.grid-tile').off('mousedown')
        $('.grid-tile').off('mouseup')
        $('.grid-tile').off('mousemove')

        let selectionTile = $('<div>')
        selectionTile.id = 'selectionTile'
        selectionTile.css('width', '32px').css('height', '32px')
        selectionTile.css('backgroundColor', 'blue').css('opacity', '0.5').css('z-index', '100')
        selectionTile.css('position', 'absolute').css('left', 0).css('top', 0)

        $('.grid-tile').mouseenter(function () {
            $(this).append(selectionTile)
        }).mouseleave(function () {
            $('selectionTile').remove()
        })

    },
    mapRead: function (playerPos) {
        console.log(playerPos)
        let saveName = "name.map"

    }

}