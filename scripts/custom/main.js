import { funcs } from '../funcs.js'

const $ = require('jquery')
const fs = require('fs')

/** 
* Function used to generate list of maps
*/
function load_maps() {
    fs.readdirSync(funcs.cwd() + 'maps/created').forEach(map => {
        $('.container').append('<button class="flex-item custom-level">' + map.replace('.map', '') + '</button>')
    })
}

/** 
* Function used to redirect selected map to map loader
* @param {Event} e - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
*/
function generate_map(e) {
    let map = 'created/' + e.target.innerText
    window.location.href = './level.html?' + map
}

load_maps()

$('.custom-level').on('click', (e) => {
    generate_map(e)
})