/* eslint-disable no-empty */
/* eslint-disable require-jsdoc */
function menugen() {
    let fs = require('fs');
    let files = fs.readdirSync('./assets/map_tiles');

    console.log(files)




    for (i = 0; files.length > i; i++) {

        $("tiles-picker").append("<div id='" + files[i].split(".", 1) + "'> <img src='./assets/map_tiles/" + files[i] + "'></div>")
    }




}


