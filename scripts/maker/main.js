global.jQuery = require('jquery')
global.$ = global.jQuery

import { MenuGen } from './menugen.js'
import { TilePainter } from './tilepainter.js'
import { reset } from './reset.js'
import { save } from './save.js'
import { load } from './load.js'
import { deleteMap } from './delete.js'

MenuGen.menugen()

load.list()

$('.icons').on('click', function() {
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
$('#reset').on('click', () => {
    reset.reset()
})
$('#save').on('click', () => {
    save.main()
})
$('#load').on('change', () => {
    load.load()
})
$('#deleteMap').on('click', () => {
    deleteMap.core()
})

