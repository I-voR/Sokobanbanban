/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const infobox = {
    createInfobox: function(type, text = '') {
        let dialog = $('<dialog>')

        dialog
            .attr('open', '')
            .addClass('infobox ' + type)

        switch (type) {
        case 'info':
            dialog
                .append('<span class="heading">Info</span>')
                .append('<div class="text-infobox">' + text + '</div>')
                .append('<button class="close-infobox" onclick="document.getElementsByClassName(\'infobox\')[0].remove()">OK</button>')
            break

        case 'warn':
            dialog
                .append('<span class="heading">Warning!</span>')
                .append('<div class="text-infobox">' + text + '</div>')
                .append('<button class="close-infobox" onclick="document.getElementsByClassName(\'infobox\')[0].remove()">OK</button>')
            break
        
        default:
            break
        }

        $('main').append(dialog)
    }
}