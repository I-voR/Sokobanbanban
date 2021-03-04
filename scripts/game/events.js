/* eslint-disable require-jsdoc */

global.jQuery = require('jquery')
global.$ = global.jQuery

export const events = {
    main: function() {
        $('body').on('keydown', function(e) {
            let player_pos = [(parseInt($('#player').css('left')) - 50) / 32, (parseInt($('#player').css('top')) - 80) / 32]
            let map = document.getElementsByTagName('TABLE')[0].children

            switch (e.key) {
            case 'ArrowUp':
            case 'w':
                console.log(events.cell_includes(map, player_pos, null, -1, 'Wall'))
                if (events.cell_includes(map, player_pos, null, -1, 'Wall')) break
                break
            
            case 'ArrowLeft':
            case 'a':
                console.log(events.cell_includes(map, player_pos, -1, null, 'Wall'))
                if (events.cell_includes(map, player_pos, -1, null, 'Wall')) break
                break
            
            case 'ArrowDown':
            case 's':
                console.log(events.cell_includes(map, player_pos, null, 1, 'Wall'))
                if (events.cell_includes(map, player_pos, null, 1, 'Wall')) break
                break
                
            case 'ArrowRight':
            case 'd':
                console.log(events.cell_includes(map, player_pos, 1, null, 'Wall'))
                if (events.cell_includes(map, player_pos, 1, null, 'Wall')) break
                break
            
            default:
                break
            }
            console.log(e.key)
        })
    },
    cell_includes: function(map, player_pos, x = 0, y = 0, text) {
        return map[player_pos[1] + y].children[player_pos[0] + x].style.backgroundImage.includes(text)
    }
}