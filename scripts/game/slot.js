/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'
import { levelgen } from './levelgen.js'
import { events } from './events.js'
import { timer } from './timer.js'
global.$ = require('jquery')

const fs = require('fs')



export const slots = {
    loadSelected: (selected) => {
        console.log(selected)
        let path = funcs.cwd() + './saves/'
        let saves = fs.readdirSync(path)
        //let save = fs.readFileSync(path + '/' + saves[selected]).toString().split('\n')

        window.location.href = funcs.cwd() + './static/level.html?' + saves[selected]
        console.log('redirect')
    }
}



$(document).ready(function () {
    let path = funcs.cwd() + './saves/'
    let saves = fs.readdirSync(path)
    //struktura sejwa: sejw,poziom,gwiazdki,timer mapy.sav

    $('#save1').append('<br>').append('Level ' + saves[0].split(".")[0].split(",")[1]).append('<br>').append(saves[0].split(".")[0].split(",")[2] + ' &#11088;')
    $('#save2').append('<br>').append('Level ' + saves[1].split(".")[0].split(",")[1]).append('<br>').append(saves[1].split(".")[0].split(",")[2] + ' &#11088;')
    $('#save3').append('<br>').append('Level ' + saves[2].split(".")[0].split(",")[1]).append('<br>').append(saves[2].split(".")[0].split(",")[2] + ' &#11088;')

    console.log(save1)

    $('#save1').on('click', () => {
        slots.loadSelected(0)
    })
    $('#save2').on('click', () => {
        slots.loadSelected(1)
    })
    $('#save3').on('click', () => {
        slots.loadSelected(2)
    })
});