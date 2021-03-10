/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const reset = {
    reset: function () {
        /*
        let tilearray = $('.grid-tile')
        let i
        for (i = 0; i < tilearray.length; i++)(
            $(tilearray[i]).empty()
            //$(tilearray[i]).append('<img src="../assets/map_tiles/Grass..png">')
        )
        for (i = 0; i < tilearray.length; i++)(
            $(tilearray[i]).append('<img src="../assets/map_tiles/Grass..png">')
        )
        */
        location.reload()
    }
}