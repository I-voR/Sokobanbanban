/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

import { infobox } from '../infobox.js'

export const save = {
    main: function () {
        $('.grid-tile').off('click')
        infobox.createInfobox('info', 'Select player starting position...')

        save.playerPlace()

        $('.grid-tile').on('click', function () {
            console.log(this)
            let id = this.id

            if ($(this).children()[0].src.slice(-7, -4) != 'col') {
                $('.grid-tile').off('mouseenter')
                $('.grid-tile').off('mouseleave')
                save.mapRead(id)
            } else {
                infobox.createInfobox('warn', 'Select floor instead of walls!')
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

        $('.grid-tile').on('mouseenter', function () {
            $(this).append(selectionTile)
        }).on('mouseleave', function () {
            $('selectionTile').remove()
        })
    },
    mapRead: function (playerPos) {
        /* map save structure 30x20 tiles (26 lines):
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,P,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/
        13-3
        0,filename
        1,filename
        2,filename
        3,filename
        4,filename
         */

        let fs = require('fs')
        let files = fs.readdirSync('./assets/map_tiles')
        function translation(filename) {
            switch (filename) {
                case files[0]:
                    return 0
                case files[1]:
                    return 1
                case files[2]:
                    return 2
                case files[3]:
                    return 3
                case files[4]:
                    return 4
                default:
                    return 0
            }
        }

        let saveName = 'name'
        let mapData = []


        for (let y = 0; y < 20; y++) {
            let saveRow = []
            for (let x = 0; x < 30; x++) {
                let temp = $('#' + y + '-' + x).children()[0].src.split('/')
                saveRow[x] = translation(temp[temp.length - 1])
            }
            mapData[y] = saveRow
        }

        mapData[20] = playerPos

        for (let i = 0; i < files.length; i++) {
            mapData[mapData.length] = i + ',' + files[i]
        }

        console.log(mapData)

        let file = fs.createWriteStream('./created-maps/' + saveName + '.map')
        file.on('error', function (e) { /* error handling */ })
        mapData.forEach(function (v) { file.write(v + '\n') })
        file.end()
    }
}