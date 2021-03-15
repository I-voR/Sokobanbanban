/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery
global.fs = require('fs')

export const load = {
    load: function () {
        //console.log(this)
        //console.log($('#load option:selected').text())
        if ($('#load option:selected').text() == "NEW") { return }
        var map = global.fs.readFileSync('./created-maps/' + $('#load option:selected').text()).toString().split('\n')

        map.forEach((element, index) => {
            map[index] = map[index].split(",")
        })

        console.log(map)
        $('#level-border').empty()
        var tile
        for (let i = 0; i < 20; i++) {
            for (let l = 0; l < 30; l++) {

                for (let m = 21; m < map.length; m++) {
                    //console.log(map[m].slice(0, 1) + " " + map[i][l])
                    if (map[m][0] == map[i][l]) {
                        console.log(map[m][1])
                        var tileType = map[m][1]
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
    list: function () {
        let files = fs.readdirSync('./created-maps')
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