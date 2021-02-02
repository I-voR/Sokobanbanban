global.jQuery = require('jquery')
global.$ = global.jQuery

import { MenuGen } from './menugen.js'

MenuGen.menugen()

$('<DIV>')