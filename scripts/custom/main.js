import { funcs } from '../funcs.js'

const $ = require('jquery')
const fs = require('fs')

/** 
* Function used to generate list of maps
*/
function load_maps() {
    fs.readdirSync(escape(funcs.cwd() + 'maps/created').replace(/%3A/g, ':')).forEach(map => {
        $('.container').append('<button class="flex-item custom-level">' + map.replace('.map', '') + '</button>')
    })
}

/** 
* Function used to redirect selected map to map loader
* @param {Event} e - OnClick event
*/
function generate_map(e) {
    let map = 'created:' + e.target.innerText
    location.href = escape('./level.html?' + map).replace(/%3A/g, ':').replace(/%3F/g, '?')
}

load_maps()

$('.custom-level').on('click', (e) => {
    generate_map(e)
})
