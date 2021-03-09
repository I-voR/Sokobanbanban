global.jQuery = require('jquery')
global.$ = global.jQuery
global.pressCount = 0

import { infobox } from '../infobox.js'

export const events = {
    main: function () {
        $('body').on('keydown', function (e) {
            let bool = false, crate_bool = true

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
                    player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Back.png")')

                    if (events.cell_includes(map, player_pos, null, -1, 'Wall')) return

                    for (let i = 0; i < crates_pos.length; i++) {
                        if (crates_pos[i][0] === player_pos[0] &&
                            crates_pos[i][1] === player_pos[1] - 1) {
                            bool = true
                            break
                        }
                    }

                    crate_bool = events.move_crate(bool, map, player_pos, crates_pos, null, -2)
                    if (crate_bool) events.move_player(bool, map, player, player_pos, null, -1)

                    break

                case 'ArrowLeft':
                case 'a':
                    player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Left.png")')

                    if (events.cell_includes(map, player_pos, -1, null, 'Wall')) return

                    for (let i = 0; i < crates_pos.length; i++) {
                        if (crates_pos[i][0] === player_pos[0] - 1 &&
                            crates_pos[i][1] === player_pos[1]) {
                            bool = true
                            break
                        }
                    }

                    crate_bool = events.move_crate(bool, map, player_pos, crates_pos, -2, null)
                    if (crate_bool) events.move_player(bool, map, player, player_pos, -1, null)

                    break

                case 'ArrowDown':
                case 's':
                    player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Front.png")')

                    if (events.cell_includes(map, player_pos, null, 1, 'Wall')) return

                    for (let i = 0; i < crates_pos.length; i++) {
                        if (crates_pos[i][0] === player_pos[0] &&
                            crates_pos[i][1] === player_pos[1] + 1) {
                            bool = true
                            break
                        }
                    }

                    crate_bool = events.move_crate(bool, map, player_pos, crates_pos, null, 2)
                    if (crate_bool) events.move_player(bool, map, player, player_pos, null, 1)

                    break

                case 'ArrowRight':
                case 'd':
                    player.css('backgroundImage', 'url("../assets/spritesheet/Steve_Right.png")')

                    if (events.cell_includes(map, player_pos, 1, null, 'Wall')) return

                    for (let i = 0; i < crates_pos.length; i++) {
                        if (crates_pos[i][0] === player_pos[0] + 1 &&
                            crates_pos[i][1] === player_pos[1]) {
                            bool = true
                            break
                        }
                    }

                    crate_bool = events.move_crate(bool, map, player_pos, crates_pos, 2, null)
                    if (crate_bool) events.move_player(bool, map, player, player_pos, 1, null)

                    break

                case 'r':
                    location.reload()
                    global.pressCount = 0
                    break

                default:
                    break
            }

            events.is_level_completed()
        })
    },
    cell_includes: function (map, player_pos, x = 0, y = 0, text) {
        return map[player_pos[1] + y].children[player_pos[0] + x].style.backgroundImage.includes(text)
    },
    is_air: function (map, player_pos, x = 0, y = 0) {
        return events.cell_includes(map, player_pos, x, y, 'Floor')
    },
    move_player: function (bool, map, player, player_pos, x = 0, y = 0) {
        var animationSpeed = 100
        global.pressCount++

        if (bool) {
            if (!events.is_air(map, player_pos, x * 2, y * 2)) return
            else {
                player.animate({ "left": ((player_pos[0] + x) * 32 + 50) + 'px' }, animationSpeed);
                player.animate({ "top": ((player_pos[1] + y) * 32 + 80) + 'px' }, animationSpeed);
                //player.css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
                //player.css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
            }
        } else {
            player.animate({ "left": ((player_pos[0] + x) * 32 + 50) + 'px' }, animationSpeed);
            player.animate({ "top": ((player_pos[1] + y) * 32 + 80) + 'px' }, animationSpeed);
        }
    },
    move_crate: function (bool, map, player_pos, crates_pos, x = 0, y = 0) {
        var animationSpeed = 100
        if (bool) {
            if (!events.is_air(map, player_pos, x, y)) return
            else {
                for (let i = 0; i < $('.crates').length; i++) {
                    if ((parseInt($('.crates').eq(i).css('left')) - 50) / 32 === player_pos[0] + (x / 2) &&
                        (parseInt($('.crates').eq(i).css('top')) - 80) / 32 === player_pos[1] + (y / 2)) {
                        for (let j = 0; j < crates_pos.length; j++) {
                            if ((player_pos[0] + x === crates_pos[j][0]) &&
                                (player_pos[1] + y === crates_pos[j][1])) return false
                        }

                        //$('.crates').eq(i).css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
                        //$('.crates').eq(i).css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
                        $('.crates').eq(i).animate({ "left": ((player_pos[0] + x) * 32 + 50) + 'px' }, animationSpeed);
                        $('.crates').eq(i).animate({ "top": ((player_pos[1] + y) * 32 + 80) + 'px' }, animationSpeed);
                        break
                    }
                }
            }
        }
        return true
    },
    is_level_completed: function () {
        let crates_pos = []
        let plates_pos = []
        let count = 0

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

        for (let i = 0; i < crates_pos.length; i++) {
            for (let j = 0; j < plates_pos.length; j++) {
                if (crates_pos[i][0] === plates_pos[j][0] && crates_pos[i][1] === plates_pos[j][1]) {
                    count++
                    break
                }
            }
        }

        if (count === crates_pos.length) infobox.createInfobox('completed', null)
    },
}