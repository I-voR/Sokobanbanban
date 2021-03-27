/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Infobox creator
*/

import { funcs } from './funcs.js'
import { timer } from './game/timer.js'

const fs = require('fs')

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
        * "saved" (information about manually saved game; savebox)
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
                .append('<button class="close-infobox">OK</button>')
            break

        case 'warn':
            dialog
                .append('<span class="heading">Warning!</span>')
                .append('<div class="text-infobox">' + text + '</div>')
                .append('<button class="close-infobox">OK</button>')
            break

        case 'completed':
            dialog
                .append('<span class="heading">Congratulations!</span>')
            
            if (text.length === 2) {
                let totalScore = parseInt(text[0].split(',')[2]) + text[1]
                dialog
                    .append('<div class="text-infobox">You completed level ascending:' + 
                            text[0].split(',')[1] +
                            '<br>Score: ' +
                            text[1] +
                            ' ⭐<br>Total score: ' +
                            '<span id="total-score">' + totalScore + '</span>' +
                            ' ⭐</div>')
                    .append('<button class="close-infobox">OK</button>')

                if (parseInt(text[0].split(',')[1]) === 21) {
                    let form = $('<form>')
                    let input = $('<input>')
                    let label = $('<label>')

                    input
                        .attr('type', 'text')
                        .attr('id', 'name')
                        .attr('name', 'name')

                    label.attr('for', 'name')

                    label.append('Your name:')
                    form
                        .append(label)
                        .append(input)
                    dialog.append(form)
                }
            } else {
                dialog
                    .append('<div class="text-infobox">You completed level ' + text + '<br>Move count: ' + global.pressCount + '<br>Time: ' + timer.get_end_time() + '</div>')
                    .append('<button class="close-infobox">OK</button>')
            }
            break

        case 'remove':
            dialog
                .append('<span class="heading">Attention!</span>')
                .append('<div class="text-infobox">Are you sure you want to remove level ' + text + '?</div>')
                .append('<button class="remove-map-infobox" id="yes-remove">Yes</button>')
                .append('<button class="remove-map-infobox" id="no-remove">Cancel</button>')
            break

        case 'saved':
            dialog
                .append('<span class="heading">Info</span>')
                .append('<div class="text-infobox">Current progress has been successfully saved</div>')
                .append('<button class="close-infobox">OK</button>')
            break
        
        default:
            break
        }

        $('main').append(dialog)

        if (type === 'completed' && text.length === 2) {
            $('.close-infobox').on('click', function() {
                let map = window.location.href.substr(window.location.href.indexOf('?') + 1).split(',')
                let save = map[0]
                let path = funcs.cwd() + 'saves/'
                let saves = fs.readdirSync(path)

                if (parseInt(map[1]) < 21) {
                    window.location.href = window.location.href.substring(0, window.location.href.indexOf('?') + 1) + saves[save - 1]
                } else {
                    if ($('input').val().length > 0) window.location.href = './leaderboard.html?' + $('input').val() + ':' + $('#total-score').text()
                }
            })
        } else if ((type === 'completed' && text.length > 2) || (type === 'saved')) {
            $('.close-infobox').on('click', function() { location.href = '../index.html' })
        } else {
            $('.close-infobox').on('click', function() { document.getElementsByClassName('infobox')[0].remove() })
        }
    }
}
