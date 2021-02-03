global.jQuery = require('jquery')
global.$ = global.jQuery

import { MenuGen } from './menugen.js'
import { TilePainter } from './tilepainter.js'

MenuGen.menugen()
//TilePainter.tilepaint()
let lastpicked
$('.icons').click(function () {
    $('.grid-tile').off('mousedown')
    $('.grid-tile').off('mouseup')
    $('.grid-tile').off('mousemove')
    TilePainter.tilepaint($(this).attr('id'))

    if ($(this).css('outline') === 'rgb(0, 0, 255) solid 0px') {
        $('.icons').css('outline', 'rgb(0, 0, 255) solid 0px')
        console.log($(this))
        console.log($(this).css('outline'))
        $(this).css('outline', 'rgb(0, 0, 255) solid 2px')
    } else if ($(this).css('outline') === 'rgb(0, 0, 255) solid 2px') {
        console.log("działa")
        $(this).css('outline', 'rgb(0, 0, 255) solid 0px')
    }
    //outline: 3px red solid
});

