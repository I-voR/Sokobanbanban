
//const saves = require('../game/saves');
const fs = require('fs')
function cwd() {
    let cwd = process.cwd().replace(/\\/g, '/') + '/'
    for (const key in fs.readdirSync(cwd)) {
        if (fs.readdirSync(cwd)[key] === 'resources') {
            cwd += 'resources/app/'
            break
        }
    }
    return cwd
}

function mapRead(baseMapNumber, savingInGame) {
    let baseMapName = (baseMapNumber.length == 1 ? '0' + baseMapNumber : baseMapNumber) + '.map'
    let map = fs.readFileSync(cwd() + 'maps/ascending/' + baseMapName).toString().split('\n')

    map.forEach((element, index) => {
        map[index] = map[index].split(',')
    })

    for (let i = 0; i < 20; i++) {
        if (savingInGame) {
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
        }
        map[i].join()
    }
    if (savingInGame) {
        map[20][0] = ($('#player')[0].style.top.slice(0, -2) - 80) / 32 + '-' + ($('#player')[0].style.left.slice(0, -2) - 50) / 32
    }
    return map
}


test('adds 1 + 2 to equal 3', () => {
    expect(typeof mapRead('01', false)).toBe('object');
});