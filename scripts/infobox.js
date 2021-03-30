/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Infobox creator
*/

import { funcs } from './funcs.js'
import { timer } from './game/timer.js'
import { hall } from './game/toHall.js'

const fs = require('fs')

export const infobox = {
    /** 
    * Function for adding an infobox to current page.
    * @summary This function adds a DIALOG infobox of different types to the current page, which is used to inform the player about something.
    * @param {String} type - Infobox type. Allowed types:
        * "info" (normal infobox);
        * "warn" (infobox with a warning; warnbox);
        * "completed" (level completion information; endbox);
        * "remove" (alert informing about removing a map; rembox)
        * "saved" (information about manually saved game; savebox)
        * "surrender" (alert informing about surrendering a Ascending Mode game; surrbox)
    * @param {String} text - Custom text that will be displayed in the infobox.
    */
    createInfobox: function(type, text = '') {
        let dialog = $('<dialog>')
        let heading = $('<span>')
        let span = $('<span>')
        let textInfobox = $('<div>')

        let closeInfobox = $('<button>')
        let yesRemove = $('<button>')
        let noRemove = $('<button>')
        
        let form = $('<form>')
        let input = $('<input>')
        let label = $('<label>')

        let totalScore = 0

        heading.addClass('heading')
        textInfobox.addClass('text-infobox')
        closeInfobox
            .addClass('close-infobox')
            .append('OK')

        dialog
            .attr('open', '')
            .addClass('infobox ' + type)

        switch (type) {
        case 'info':
            heading.append('Info')
            textInfobox.append(encodeURI(text))
            dialog
                .append(heading)
                .append(textInfobox)
                .append(closeInfobox)
            break

        case 'warn':
            heading.append('Warning!')
            textInfobox.append(encodeURI(text))
            dialog
                .append(heading)
                .append(textInfobox)
                .append(closeInfobox)
            break

        case 'completed':
            heading.append('Congratulations!!')

            dialog
                .append(heading)
                .append(textInfobox)
                .append(closeInfobox)
            
            if (text.length === 2) {
                totalScore = parseInt(text[0].split(',')[2]) + text[1]

                span
                    .attr('id', 'total-score')
                    .append(encodeURI(totalScore))

                textInfobox
                    .append('You completed level ascending:' + encodeURI(text[0].split(',')[1]))
                    .append($('<br>'))
                    .append('Score: ' + encodeURI(text[1]) + ' ⭐')
                    .append($('<br>'))
                    .append('Total score: ')
                    .append(span)
                    .append(' ⭐')

                if (parseInt(text[0].split(',')[1]) === 21) {
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
                textInfobox
                    .append('You completed level ' + encodeURI(text))
                    .append($('<br>'))
                    .append('Move count: ' + global.pressCount)
                    .append($('<br>'))
                    .append('Time: ' + timer.get_end_time())
            }
            break

        case 'remove':
            yesRemove
                .attr('id', 'yes-remove')
                .addClass('remove-map-infobox')
                .append('Yes')

            noRemove
                .attr('id', 'no-remove')
                .addClass('remove-map-infobox')
                .append('No')

            heading.append('Attention!')
            textInfobox.append('Are you sure you want to remove level ' + encodeURI(text) + '?')
            dialog
                .append(heading)
                .append(textInfobox)
                .append(yesRemove)
                .append(noRemove)
            break

        case 'saved':
            heading.append('Info')
            textInfobox.append('Current progress has been successfully saved')
            dialog
                .append(heading)
                .append(textInfobox)
                .append(closeInfobox)
            break
        
        case 'surrender':
            totalScore = parseInt(text.split(',')[2])

            span
                .attr('id', 'total-score')
                .append(encodeURI(totalScore))

            heading.append('Surrender')

            textInfobox
                .append('You surrendered on level ascending:' + encodeURI(text.split(',')[1]))
                .append($('<br>'))
                .append('Score: 0 ⭐')
                .append($('<br>'))
                .append('Total score: ')
                .append(span)
                .append(' ⭐')

            input
                .attr('type', 'text')
                .attr('id', 'name')
                .attr('name', 'name')

            label.attr('for', 'name')

            label.append('Your name:')
            form
                .append(label)
                .append(input)
                
            dialog
                .append(heading)
                .append(textInfobox)
                .append(closeInfobox)
                .append(form)

            break

        default:
            break
        }

        $('main').append(dialog)

        if (type === 'completed' && text.length === 2) {
            $('.close-infobox').on('click', function() {
                let map = location.href.substr(location.href.indexOf('?') + 1).split(',')
                let save = map[0]
                let path = funcs.cwd() + 'saves/'
                let saves = fs.readdirSync(path)

                if (parseInt(map[1]) < 21) {
                    location.href = location.href.substring(0, location.href.indexOf('?') + 1) + saves[save - 1]
                } else {
                    let map = location.href.substr(location.href.indexOf('?') + 1).split(',')
                    map[2] = $('#total-score').text()
                    map = map.join(',')

                    if ($('input').val().length > 0) {
                        hall.send(map, $('input').val())
                        location.href = './leaderboard.html'
                    }
                }
            })
        } else if ((type === 'completed' && text.length > 2) || (type === 'saved')) {
            $('.close-infobox').on('click', function() { location.href = '../index.html' })
        } else if (type === 'remove') {
            $('.remove-map-infobox').on('click', function() { document.getElementsByClassName('infobox')[0].remove() })
        } else if (type === 'surrender') {
            $('.close-infobox').on('click', function() {
                let map = location.href.substr(location.href.indexOf('?') + 1).split(',')
                map[2] = $('#total-score').text()
                map = map.join(',')

                if ($('input').val().length > 0) {
                    hall.send(map, $('input').val())
                    location.href = './leaderboard.html'
                }
            })
        } else {
            $('.close-infobox').on('click', function() { document.getElementsByClassName('infobox')[0].remove() })
        }
    }
}
