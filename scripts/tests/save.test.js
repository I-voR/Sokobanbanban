//const save = require('../maker/save');
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

function translation(filename) {
    let files = fs.readdirSync(cwd() + 'assets/map_tiles')
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


test('Translates tile file names to proper map tile codes', () => {
    expect(translation('Crate.col.png')).toBe(0)
    expect(translation('Floor..png')).toBe(1)
    expect(translation('Grass..png')).toBe(2)
    expect(translation('Plate..png')).toBe(3)
    expect(translation('Wall.col.png')).toBe(4)
    expect(translation('ZCratePlate.col.png')).toBe(5)
});