/* eslint-disable require-jsdoc */

import { infobox } from '../infobox.js'
import { funcs } from '../funcs.js'

const fs = require('fs')

export const deleteMap = {
    core: () => {
        if ($.find('#load option:selected')[0].textContent === 'NEW') {
            location.reload()
            return
        }
        infobox.createInfobox('remove', $.find('#load option:selected')[0].textContent)
        $('#yes-remove').on('click', function() {
            deleteMap.delete()
        })
    },
    delete: () => {
        let e = document.getElementById('map-load')
        fs.unlink(funcs.cwd() + 'maps/created/' + e.options[e.selectedIndex].text, (err) => {
            if (err) throw err
        })
        location.reload()
    },
}
