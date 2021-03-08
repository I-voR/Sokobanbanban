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
                td.css('background-image', `url(../assets/map_tiles/${files[cell] === 'Crate.col.png' ? files[1] : files[cell] === 'Plate..png' ? files[1] : files[cell]})`)
        
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
