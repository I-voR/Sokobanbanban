import { funcs } from '../funcs.js'

const $ = require('jquery')
const fs = require('fs')

/** 
* Function used to generate list of maps
*/
function load_maps() {
    fs.readdirSync(funcs.cwd() + 'maps/created').forEach(map => {
        let button = $('<button>')
        button.addClass('flex-item custom-level')
        button.append(encodeURI(map.replace('.map', '')))
        $('.container').append(button)
    })
}

/** 
* Function used to redirect selected map to map loader
* @param {Event} e - OnClick event
*/
function generate_map(e) {
    let map = 'created:' + e.target.innerText
    location.href = './level.html?' + map
}

load_maps()

$('.custom-level').on('click', (e) => {
    generate_map(e)
})
