/* eslint-disable require-jsdoc */

import { infobox } from '../infobox.js'
import { funcs } from '../funcs.js'

const fs = require('fs')

export const deleteMap = {
    core: () => {
        if ($('#load option:selected').text() === 'NEW') {
            location.reload()
            return
        }
        infobox.createInfobox('remove', $('#load option:selected').text())
        $('#yes-remove').on('click', function() {
            deleteMap.delete()
        })
    },
    delete: () => {
        let e = document.getElementById('map-load')
        fs.unlink(funcs.cwd() + 'maps/created/' + e.options[e.selectedIndex].text, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        location.reload()
    },
}