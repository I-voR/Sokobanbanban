global.fs = require('fs')
global.jQuery = require('jquery')
global.$ = global.jQuery

export const levelgen = {
    main: function(map) {
        let files = global.fs.readdirSync('./assets/map_tiles')
        let map_dir = './maps/' + map.substring(0, map.indexOf(':')) + '/' + map.substr(map.indexOf(':') + 1) + '.map'
        let array = global.fs.readFileSync(map_dir).toString().split('\n')

        let map_bg = []
        let bg_names = []
        let player_pos = []
        
        let player = $('<div>')
        let table = $('<table>')

        for (let i = 0; i < 20; i++) map_bg.push(array[i].split(','))
        for (let i = 21; i < 26; i++) bg_names.push(array[i].split(','))
        player_pos = array[20].split('-')
        
        for (let i = 0; i < map_bg.length; i++) {
            let line = map_bg[i]
            let tr = $('<tr>')
        
            for (let j = 0; j < line.length; j++) {
                let cell = parseInt(line[j])
        
                let td = $('<td>')

                switch (files[cell]) {
                case 'Floor..png':
                case 'Crate.col.png':
                case 'Plate..png':
                    td.css('background-image', `url(../assets/map_tiles/${files[1]})`)

                    switch (map.substring(0, map.indexOf(':'))) {
                    case 'easy':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #90EE90)')
                        break
                                    
                    case 'medium':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #FFFFE0)')
                        break
                                    
                    case 'hard':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #E97451)')
                        break
                                    
                    case 'ascending':
                        td.css('filter', 'opacity(0.2) drop-shadow(0 0 0 #ADD8E6)')
                        break
                    }
                    break
                
                case 'Grass..png':
                    td.css('background-image', 'url(../assets/map_tiles/Grass..png)')

                    switch (map.substring(0, map.indexOf(':'))) {
                    case 'easy':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #013220)')
                        break
                            
                    case 'medium':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #9B870C)')
                        break
                            
                    case 'hard':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #8B0000)')
                        break
                            
                    case 'ascending':
                        td.css('filter', 'opacity(0.6) drop-shadow(0 0 0 #00008B)')
                        break
                            
                    default:
                        break
                    }
                    break

                default:
                    td.css('background-image', `url(../assets/map_tiles/${files[cell]})`)
                    break
                }
        
                if (files[cell] === 'Crate.col.png') {
                    let crate = $('<div>')
                    crate
                        .addClass('crates')
                        .css('left', (j * 32 + 50) + 'px')
                        .css('top', (i * 32 + 80) +'px')
                    $('main').append(crate)
                } else if (files[cell] === 'Plate..png') {
                    let plate = $('<div>')
                    plate
                        .addClass('plates')
                        .css('left', (j * 32 + 50) + 'px')
                        .css('top', (i * 32 + 80) +'px')
                    $('main').append(plate)
                }

                tr.append(td)
            }
            table.append(tr)
        }
        
        player
            .prop('id', 'player')
            .css('left', (player_pos[1] * 32 + 50) + 'px')
            .css('top', (player_pos[0] * 32 + 80) +'px')
        
        $('main')
            .append(table)
            .append(player)
    }
}
