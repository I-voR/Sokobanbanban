global.jQuery = require('jquery')
global.$ = global.jQuery

import { MenuGen } from './menugen.js'
import { TilePainter } from './tilepainter.js'
import { reset } from './reset.js'
import { save } from './save.js'

MenuGen.menugen()

$('.icons').click(function () {
    $('.grid-tile').off('mousedown')
    $('.grid-tile').off('mouseup')
    $('.grid-tile').off('mousemove')
    $('.grid-tile').off('click')
    TilePainter.tilepaint($(this).attr('id'))

    if ($(this).css('outline') === 'rgb(0, 0, 255) solid 0px') {
        $('.icons').css('outline', 'rgb(0, 0, 255) solid 0px')
        $(this).css('outline', 'rgb(0, 0, 255) solid 2px')
    } else if ($(this).css('outline') === 'rgb(0, 0, 255) solid 2px') {
        $(this).css('outline', 'rgb(0, 0, 255) solid 0px')
    }
})
$('#reset').click(function () {
    reset.reset()
})
$('#save').click(function () {
    save.save()
})