/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const load = {
    load: function() {
        console.log(this)
        console.log($('#load option:selected').text())
    },
    list: function() {
        let fs = require('fs')
        let files = fs.readdirSync('./created-maps')
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