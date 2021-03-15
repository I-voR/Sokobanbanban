/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Infobox creator
*/


global.jQuery = require('jquery')
global.$ = global.jQuery

export const infobox = {
    /** 
    * Function for infobox creation.
    * @summary This function adds a DIALOG infobox of different types to the current page, which is used to inform the player about something.
    * @param {String} type - Infobox type. Allowed types:
        * "info" (normal infobox);
        * "warn" (infobox with a warning; warnbox);
        * "error" (infobox with a description of an error; errbox);
        * "completed" (level completion information; endbox)
    * @param {String} text - Custom text that will be displayed in the infobox.
    */
    createInfobox: function(type, text = '') {
        let dialog = $('<dialog>')
        let map = window.location.href.substr(window.location.href.indexOf('?') + 1)

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

        case 'completed':
            dialog
                .append('<span class="heading">Congratulations!</span>')
                .append('<div class="text-infobox">You completed level ' + map + '<br>' +  'Move count: ' + global.pressCount + '</div>')
                .append('<button class="close-infobox" onclick="document.getElementsByClassName(\'infobox\')[0].remove();location.href=\'../index.html\'">OK</button>')
            break
        
        default:
            break
        }

        $('main').append(dialog)
    }
}