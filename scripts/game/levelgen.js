/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Map generator for GAME module
*/

import { funcs } from '../funcs.js'

const fs = require('fs')

export const levelgen = {
    main: (map) => {
        let assets_path = funcs.cwd() + 'assets/map_tiles/'
        let map_path = funcs.cwd()
        map_path += map.includes('.sav') ? 'saves/' + map : 'maps/' + map.substring(0, map.indexOf(':')) + '/' + map.substr(map.indexOf(':') + 1) + '.map'

        let files = fs.readdirSync(escape(assets_path).replace(/%3A/g, ':'))
        let array = fs.readFileSync(escape(map_path).replace(/%3A/g, ':')).toString().split('\n')

        let map_bg = []
        let bg_names = []
        let player_pos = []

        let player = $('<div>')
        let table = $('<table>')

        for (let i = 0; i < 20; i++) map_bg.push(array[i].split(','))
        for (let i = 21; i < array.length; i++) bg_names.push(array[i].split(','))
        player_pos = array[20].split('-')

        for (let i = 0; i < map_bg.length; i++) {
            let line = map_bg[i]
            let tr = $('<tr>')

            for (let j = 0; j < line.length; j++) {
                let cell = parseInt(line[j])
                let td = $('<td>')

                switch (files[cell]) {
                case 'Floor..png':
                case 'Crate.col.png':
                case 'ZCratePlate.col.png':
                case 'Plate..png':
                    td.css('background-image', 'url("' + assets_path + 'Floor..png")')

                    if (map.includes('sav')) {
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #E3FBE3)')
                    }

                    switch (map.substring(0, map.indexOf(':'))) {
                    case 'easy':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #ADD8E6)')
                        break

                    case 'medium':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #EDCF18)')
                        break

                    case 'hard':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #F2AC97)')
                        break

                    case 'created':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #D4B0F4)')
                        break
                    }
                    break

                case 'Grass..png':
                    td.css('background-image', 'url("' + assets_path + 'Grass..png")')

                    if (map.includes('sav')) {
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #013220)')
                    }

                    switch (map.substring(0, map.indexOf(':'))) {
                    case 'easy':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #4EE44E)')
                        break

                    case 'medium':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #9B870C)')
                        break

                    case 'hard':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #DF491C)')
                        break

                    case 'created':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #8A2BE2)')
                        break
                    }
                    break

                default:
                    td.css('background-image', 'url("' + assets_path + files[cell] + '")')
                    break
                }

                if (files[cell] === 'Crate.col.png' || files[cell] === 'ZCratePlate.col.png') {
                    let crate = $('<div>')
                    crate
                        .addClass('crates')
                        .css('left', (j * 32 + 50) + 'px')
                        .css('top', (i * 32 + 80) + 'px')
                    $('main').append(crate)
                }
                if (files[cell] === 'Plate..png' || files[cell] === 'ZCratePlate.col.png') {
                    let plate = $('<div>')
                    plate
                        .addClass('plates')
                        .css('left', (j * 32 + 50) + 'px')
                        .css('top', (i * 32 + 80) + 'px')
                    $('main').append(plate)
                }

                tr.append(td)
            }
            table.append(tr)
        }

        player
            .prop('id', 'player')
            .css('left', (player_pos[1] * 32 + 50) + 'px')
            .css('top', (player_pos[0] * 32 + 80) + 'px')

        $('main')
            .append(table)
            .append(player)
    },
    get_map_reqs: (map) => {
        let map_path = funcs.cwd()
        map_path += map.includes('sav') ? 'saves/' + map : 'maps/' + map.substring(0, map.indexOf(':')) + '/' + map.substr(map.indexOf(':') + 1) + '.map'

        return fs.readFileSync(escape(map_path).replace(/%3A/g, ':')).toString().split('\n')[27].split(':')
    }
}
