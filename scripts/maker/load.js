/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'

const fs = require('fs')

export const load = {
    load: () => {
        if ($.find('#load option:selected')[0].textContent === 'NEW') { return }
        let map = fs.readFileSync(
            funcs.cwd() + 'maps/created/' + $.find('#load option:selected')[0].textContent
        ).toString().split('\n')

        map.forEach((element, index) => {
            map[index] = map[index].split(',')
        })

        $('#level-border').empty()
        let tile, tileType

        for (let i = 0; i < 20; i++) {
            for (let l = 0; l < 30; l++) {
                for (let m = 21; m < map.length; m++) {
                    if (map[m][0] == map[i][l]) {
                        tileType = map[m][1]
                        continue
                    }
                }

                tile = $('<div>')

                tile
                    .attr('id', (i + '-' + l))
                    .attr('class', 'grid-tile')
                    .css('left', (l * 32) + 'px')
                    .css('top', (i * 32) + 'px')
                    .css('outline', '0px blue solid')
                    .append('<img src="../assets/map_tiles/' + tileType + '">')

                $('#level-border').append(tile)
            }
        }
    },
    list: () => {
        let path = funcs.cwd() + 'maps/created/'

        let files = fs.readdirSync(path)
        let select = $('<select>')
        select
            .attr('name', 'map-load')
            .attr('id', 'map-load')
            .attr('form', 'map-load')

        let option = $('<option>')
        option
            .attr('value', 'NEW')
            .append('NEW')
        select.append(option)

        for (let i = 0; i < files.length; i++) {
            option = $('<option>')
            option.attr('value', files[i])
            option.append(encodeURI(files[i]).replace(/%20/g, ' '))
            select.append(option)
        }
        $('#load').append(select)
    }
}
