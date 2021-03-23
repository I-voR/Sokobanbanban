/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'

const fs = require('fs')

export const load = {
    load: () => {
        //console.log(this)
        //console.log($('#load option:selected').text())
        if ($('#load option:selected').text() === 'NEW') { return }
        let map = fs.readFileSync(funcs.cwd() + 'maps/created/' + $('#load option:selected').text()).toString().split('\n')

        map.forEach((element, index) => {
            map[index] = map[index].split(',')
        })

        console.log(map)
        $('#level-border').empty()
        let tile, tileType

        for (let i = 0; i < 20; i++) {
            for (let l = 0; l < 30; l++) {
                for (let m = 21; m < map.length; m++) {
                    //console.log(map[m].slice(0, 1) + " " + map[i][l])
                    if (map[m][0] == map[i][l]) {
                        console.log(map[m][1])
                        tileType = map[m][1]
                        continue
                    }
                }

                tile = $('<div>')
                tile.attr('id', (i + '-' + l))
                tile.attr('class', 'grid-tile')
                tile.css('left', (l * 32) + 'px')
                tile.css('top', (i * 32) + 'px')
                tile.css('outline', '0px blue solid')
                console.log('<img src="../assets/map_tiles/' + tileType + '">')
                tile.append('<img src="../assets/map_tiles/' + tileType + '">')
                $('#level-border').append(tile)
            }
        }
    },
    list: () => {
        let path = funcs.cwd() + 'maps/created/'

        let files = fs.readdirSync(path)
        let select = $('<select>')
        select.attr('name', 'map-load')
        select.attr('id', 'map-load')
        select.attr('form', 'map-load')

        let option = $('<option>')
        option.attr('value', 'NEW')
        option.append('NEW')
        select.append(option)

        for (let i = 0; i < files.length; i++) {
            option = $('<option>')
            option.attr('value', files[i])
            option.append(files[i])
            select.append(option)
        }

        console.log(select)
        $('#load').append(select)
    }
}