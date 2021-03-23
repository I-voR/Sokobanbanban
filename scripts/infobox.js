/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Infobox creator
*/

import { timer } from './game/timer.js'

export const infobox = {
    /** 
    * Function for adding an infobox to current page.
    * @summary This function adds a DIALOG infobox of different types to the current page, which is used to inform the player about something.
    * @param {String} type - Infobox type. Allowed types:
        * "info" (normal infobox);
        * "warn" (infobox with a warning; warnbox);
        * "error" (infobox with a description of an error; errbox);
        * "completed" (level completion information; endbox);
        * "remove" (alert informing about removing a map; rembox)
    * @param {String} text - Custom text that will be displayed in the infobox.
    */
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

        case 'completed':
            dialog
                .append('<span class="heading">Congratulations!</span>')
                .append('<div class="text-infobox">You completed level ' + text + '<br>Move count: ' + global.pressCount + '<br>Time: ' + timer.get_end_time() + '</div>')
                .append('<button class="close-infobox" onclick="document.getElementsByClassName(\'infobox\')[0].remove();location.href=\'../index.html\'">OK</button>')
            break

        case 'remove':
            dialog
                .append('<span class="heading">Attention!</span>')
                .append('<div class="text-infobox">Are you sure you want to remove level ' + text + '?</div>')
                .append('<button class="remove-map-infobox" id="yes-remove" onclick="document.getElementsByClassName(\'infobox\')[0].remove()">Yes</button>')
                .append('<button class="remove-map-infobox" id="no-remove" onclick="document.getElementsByClassName(\'infobox\')[0].remove()">Cancel</button>')
            break
        
        default:
            break
        }

        $('main').append(dialog)
    }
}
