global.jQuery = require('jquery')
global.$ = global.jQuery
global.pressCount = 0

export const events = {
    main: function() {
        $('body').on('keydown', function(e) {
            let bool = false

            let player = $('#player')
            let player_pos = [(parseInt($('#player').css('left')) - 50) / 32, (parseInt($('#player').css('top')) - 80) / 32]
            let crates_pos = []
            let plates_pos = []
            let map = document.getElementsByTagName('TABLE')[0].children

            for (let i = 0; i < $('.crates').length; i++) {
                let x = (parseInt($('.crates').eq(i).css('left')) - 50) / 32
                let y = (parseInt($('.crates').eq(i).css('top')) - 80) / 32
                crates_pos.push([x, y])
            }

            for (let i = 0; i < $('.plates').length; i++) {
                let x = (parseInt($('.plates').eq(i).css('left')) - 50) / 32
                let y = (parseInt($('.plates').eq(i).css('top')) - 80) / 32
                plates_pos.push([x, y])
            }


            switch (e.key) {
            case 'ArrowUp':
            case 'w':
                global.pressCount++

                console.log(events.cell_includes(map, player_pos, null, -1, 'Wall'))
                player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Back.png")')

                if (events.cell_includes(map, player_pos, null, -1, 'Wall')) return

                for (let i = 0; i < crates_pos.length; i++) {
                    if (crates_pos[i][0] === player_pos[0] &&
                    crates_pos[i][1] === player_pos[1] - 1) {
                        bool = true
                        break
                    }
                }

                events.move_player(player, player_pos, null, -1)
                events.move_crate(bool, map, player_pos, null, -2)

                break
            
            case 'ArrowLeft':
            case 'a':
                global.pressCount++

                console.log(events.cell_includes(map, player_pos, -1, null, 'Wall'))
                player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Left.png")')

                if (events.cell_includes(map, player_pos, -1, null, 'Wall')) return

                for (let i = 0; i < crates_pos.length; i++) {
                    if (crates_pos[i][0] === player_pos[0] - 1 &&
                    crates_pos[i][1] === player_pos[1]) {
                        bool = true
                        break
                    }
                }

                events.move_player(player, player_pos, -1, null)
                events.move_crate(bool, map, player_pos, -2, null)

                break
            
            case 'ArrowDown':
            case 's':
                global.pressCount++

                console.log(events.cell_includes(map, player_pos, null, 1, 'Wall'))
                player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Front.png")')

                if (events.cell_includes(map, player_pos, null, 1, 'Wall')) return

                for (let i = 0; i < crates_pos.length; i++) {
                    if (crates_pos[i][0] === player_pos[0] &&
                    crates_pos[i][1] === player_pos[1] + 1) {
                        bool = true
                        break
                    }
                }

                events.move_player(player, player_pos, null, 1)
                events.move_crate(bool, map, player_pos, null, 2)
                
                break
                
            case 'ArrowRight':
            case 'd':
                global.pressCount++

                console.log(events.cell_includes(map, player_pos, 1, null, 'Wall'))
                player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Right.png")')

                if (events.cell_includes(map, player_pos, 1, null, 'Wall')) return

                for (let i = 0; i < crates_pos.length; i++) {
                    if (crates_pos[i][0] === player_pos[0] + 1 &&
                    crates_pos[i][1] === player_pos[1]) {
                        bool = true
                        break
                    }
                }

                events.move_player(player, player_pos, 1, null)
                events.move_crate(bool, map, player_pos, 2, null)
                
                break
            
            case 'r':
                location.reload()
                global.pressCount = 0
                break

            default:
                break
            }
            
            console.log(global.pressCount)
        })
    },
    cell_includes: function(map, player_pos, x = 0, y = 0, text) {
        return map[player_pos[1] + y].children[player_pos[0] + x].style.backgroundImage.includes(text)
    },
    is_air: function(map, player_pos, x = 0, y = 0) {
        let bool = false
        bool = map[player_pos[1] + y].children[player_pos[0] + x].style.backgroundImage.includes('Floor')



        return bool
    },
    move_player: function(player, player_pos, x = 0, y = 0) {
        player.css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
        player.css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
    },
    move_crate: function(bool, map, player_pos, x = 0, y = 0) {
        if (bool) {
            if (!events.is_air(map, player_pos, x, y)) return
            else {
                for (let i = 0; i < $('.crates').length; i++) {
                    if ((parseInt($('.crates').eq(i).css('left')) - 50) / 32 === player_pos[0] + (x / 2) &&
                    (parseInt($('.crates').eq(i).css('top')) - 80) / 32 === player_pos[1] + (y / 2)) {
                        $('.crates').eq(i).css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
                        $('.crates').eq(i).css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
                        break
                    }
                }
            }
        }
    }
}