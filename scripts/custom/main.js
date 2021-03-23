import { funcs } from '../scripts/funcs.js'

const $ = require('jquery')
const fs = require('fs')
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1))

function load_maps() {
    console.log(fs.readdirSync())
}

function generate_map(e) {
    let map = e.target.id + ':0' + randomBetween(1, 7)
    window.location.href = './level.html?' + map
}

$('.dif-level').on('click', (e) => {
    generate_map(e)
})