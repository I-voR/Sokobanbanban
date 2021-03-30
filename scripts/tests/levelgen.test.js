//const levelgen = require('../levelgen');
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

function get_map_reqs(map) {
    let map_path = cwd()
    map_path += map.includes('sav') ? 'saves/' + map : 'maps/' + map.substring(0, map.indexOf(':')) + '/' + map.substr(map.indexOf(':') + 1) + '.map'
    return fs.readFileSync(map_path).toString().split('\n')[27].split(':')
}

test('Returns star rating for given map', () => {
    expect(get_map_reqs('ascending:01')).toEqual(['25', '20000']);
});