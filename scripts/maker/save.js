/* eslint-disable require-jsdoc */

const fs = require('fs')

import { funcs } from '../funcs.js'
import { infobox } from '../infobox.js'
import { load } from './load.js'

export const save = {
    main: () => {
        $('.grid-tile').off('click')
        if (!save.boxCheck()) {
            infobox.createInfobox('warn', 'Make sure you placed boxes and plates, you have the same amount of plates and boxes and then try again.')
            return
        }
        infobox.createInfobox('info', 'Select player starting position...')

        save.playerPlace()

        $('.grid-tile').on('click', function() {
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
    playerPlace: () => {
        $('.grid-tile').off('mousedown')
        $('.grid-tile').off('mouseup')
        $('.grid-tile').off('mousemove')

        let selectionTile = $('<div>')
        selectionTile.id = 'selectionTile'
        selectionTile
            .css('width', '32px')
            .css('height', '32px')
            .css('backgroundColor', 'blue')
            .css('opacity', '0.5')
            .css('z-index', '100')
            .css('position', 'absolute')
            .css('left', 0)
            .css('top', 0)

        $('.grid-tile').on('mouseenter', function() {
            $(this).append(selectionTile)
        }).on('mouseleave', function() {
            $('selectionTile').remove()
        })
    },
    mapRead: (playerPos) => {
        /* map save structure 30x20 tiles (27 lines):
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
        5,filename
         */

        let files = fs.readdirSync(funcs.cwd() + 'assets/map_tiles')



        let saveName
        let mapData = []

        for (let y = 0; y < 20; y++) {
            let saveRow = []
            for (let x = 0; x < 30; x++) {
                let temp = $('#' + y + '-' + x).children()[0].src.split('/')
                saveRow[x] = save.translation(temp[temp.length - 1])
            }
            mapData[y] = saveRow
        }

        mapData[20] = playerPos

        for (let i = 0; i < files.length; i++) {
            mapData[mapData.length] = i + ',' + files[i]
        }

        if ($.find('#load option:selected')[0].textContent === 'NEW') {
            saveName = new Date().toISOString().slice(0, -5).replace(/:/g, '-').replace('T', '_') + '.map'
        } else {
            saveName = $.find('#load option:selected')[0].textContent
        }

        let file = fs.createWriteStream(funcs.cwd() + 'maps/created/' + saveName)
        file.on('error', (err) => { if (err) throw err; infobox.createInfobox('error', 'Map ' + saveName + ' could not be saved') })
        mapData.forEach((v) => { file.write(v + '\n') })
        file.end()

        infobox.createInfobox('info', 'Map succesfully saved as: ' + saveName)

        $('#load').empty()
        load.list()
        //$('#map-load').val = saveName
    },
    boxCheck: () => {
        let temp
        let crateCount = 0
        let plateCount = 0

        $('img').each(function() {
            temp = $(this).attr('src').split('/')
            if (save.translation(temp[temp.length - 1]) === 0) { crateCount++ }
            else if (save.translation(temp[temp.length - 1]) === 3) { plateCount++ }
            else if (save.translation(temp[temp.length - 1]) === 5) { crateCount++; plateCount++ }
        })

        return ((crateCount === plateCount) && (crateCount !== 0))
    },
    translation: (filename) => {
        let files = fs.readdirSync(funcs.cwd() + 'assets/map_tiles')
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

        case files[5]:
            return 5

        default:
            return 0
        }
    }
}
