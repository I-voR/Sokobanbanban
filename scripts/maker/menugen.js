/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */
import * as $ from '../node_modules/jquery/dist/jquery.js'


export const MenuGen = {
    menugen: function () {
        let fs = require('fs')
        let files = fs.readdirSync('./assets/map_tiles')

        console.log(files)
        let i



        for (i = 0; files.length > i; i++) {
            $("tiles-picker").append("<div id='" + files[i].split(".", 1) + "'> <img src='./assets/map_tiles/" + files[i] + "'></div>")
        }
    }
}

