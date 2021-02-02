global.jQuery = require('jquery')
global.$ = global.jQuery

import { MenuGen } from './menugen.js'
import { TilePainter } from './tilepainter.js'

MenuGen.menugen()
//TilePainter.tilepaint()

$('.icons').click(function () {


    TilePainter.tilepaint($(this).attr('id'))
});

