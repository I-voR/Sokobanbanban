/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'

global.$ = require('jquery')

const fs = require('fs')



export const save = {
    game: (save, level, stars, time) => {
        let path = funcs.cwd() + './saves/'
        let saves = fs.readdirSync(path)
        //let save = fs.readFileSync(path + '/' + saves[selected]).toString().split('\n')
        window.location.href = funcs.cwd() + './static/level.html?' + '1' + saves[selected]



    },
    mapRead: () => {
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
                case files[5]:
                    return 5
                default:
                    return 0
            }
        }

        let saveName
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

        if ($('#load option:selected').text() === 'NEW') {
            saveName = new Date().toISOString().slice(0, -5).replace(/:/g, '-').replace('T', '_') + '.map'
        } else {
            saveName = $('#load option:selected').text()
        }

        let file = fs.createWriteStream(funcs.cwd() + 'maps/created/' + saveName)
        file.on('error', (e) => { console.error(e); infobox.createInfobox('error', 'Map ' + saveName + ' could not be saved') })
        mapData.forEach((v) => { file.write(v + '\n') })
        file.end()

        infobox.createInfobox('info', 'Map succesfully saved as: ' + saveName)

        $('#load').empty()
        load.list()

    }
}

