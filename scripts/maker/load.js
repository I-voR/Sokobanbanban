/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'

const fs = require('fs')
global.jQuery = require('jquery')
global.$ = global.jQuery

export const load = {
    load: function() {
        console.log(this)
        console.log($('#load option:selected').text())
    },
    list: function() {
        let path = funcs.cwd() + 'maps/created/'
        
        let files = fs.readdirSync(path)
        let select = $('<select>')
        select.attr('name', 'map-load')
        select.attr('id', 'map-load')
        select.attr('form', 'map-load')
        
        let option = $('<option>')
        option.attr('value', 'NEW')
        option.append('NEW')
        select.append(option)

        for (let i = 0; i < files.length; i++) {
            option = $('<option>')
            option.attr('value', files[i])
            option.append(files[i])
            select.append(option)
        }

        console.log(select)
        $('#load').append(select)
    }
}