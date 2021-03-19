/* eslint-disable require-jsdoc */

import { funcs } from '../funcs.js'
import { infobox } from '../infobox.js'
const fs = require('fs')
global.jQuery = require('jquery')
global.$ = global.jQuery
global.fs = require('fs')

export const deleteMap = {
    core: function () {

        if ($('#load option:selected').text() == "NEW") {
            location.reload()
            return
        }
        infobox.createInfobox('remove', $('#load option:selected').text())
        funcs.initFuncWithRemboxBool(deleteMap.deleting())

    },
    deleting: function () {



        //wstaw pytanie czy na pewno
        let path = "./maps/created/" + $('#load option:selected').text()
        fs.unlink(path, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })

        location.reload()

    },

}