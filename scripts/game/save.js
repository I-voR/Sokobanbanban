/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'

const fs = require('fs')

export const save = {
    game: (saveName, level, stars, moves, time) => {
        let saveFile = funcs.cwd() + 'saves/' + saveName
        //let saves = fs.readdirSync(path)
        //window.location.href = funcs.cwd() + './static/level.html?' + '1' + saves[selected]
        fs.unlink(saveFile, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        console.log(saveName)
        saveName = saveName.charAt(0) + ',' + level + ',' + stars + ',' + moves + ',' + time + '.sav'
        saveFile = funcs.cwd() + './saves/' + saveName

        let saveData = save.mapRead(level)

        let file = fs.createWriteStream(saveFile)
        file.on('error', (e) => {
            console.error(e)
            //infobox.createInfobox('error', 'Map ' + saveName + ' could not be saved')
        })
        saveData.forEach((v) => { file.write(v + '\n') })
        file.end()

        //infobox.createInfobox('info', 'Succesfully saved game on slot ' + saveName.charAt(0))
    },
    mapRead: (baseMapNumber) => {
        let baseMapName = (baseMapNumber.length == 1 ? '0' + baseMapNumber : baseMapNumber) + '.map'
        let map = fs.readFileSync(funcs.cwd() + 'maps/ascending/' + baseMapName).toString().split('\n')

        console.log(map)
        map.forEach((element, index) => {
            map[index] = map[index].split(',')
        })

        for (let i = 0; i < 20; i++) {
            for (let l = 0; l < 30; l++) {
                if (map[i][l] == 0) { map[i][l] = 1 }

                for (let crateClass = 0; crateClass < $('.crates').length; crateClass++) {
                    let left = ($('.crates')[crateClass].style.left.slice(0, -2) - 50) / 32
                    let top = ($('.crates')[crateClass].style.top.slice(0, -2) - 80) / 32
                    if (left == l && top == i) {
                        if (map[i][l] == 3) { map[i][l] = 5 } else { map[i][l] = 0 }

                    }
                }
            }
            map[i].join()
        }

        map[20][0] = ($('#player')[0].style.top.slice(0, -2) - 80) / 32 + '-' + ($('#player')[0].style.left.slice(0, -2) - 50) / 32

        console.log(map)

        return map
    }
}

