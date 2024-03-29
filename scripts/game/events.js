/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Keyboard key event handler
*/

import { infobox } from '../infobox.js'
import { timer } from './timer.js'
import { levelgen } from './levelgen.js'
import { saves } from './saves.js'

export const events = {
    main: () => {
        $('body').on('keydown', function(e) {
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

                if (events.cell_includes(map, player_pos, null, -1, 'Wall')) break

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

                if (events.cell_includes(map, player_pos, -1, null, 'Wall')) break

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

                if (events.cell_includes(map, player_pos, null, 1, 'Wall')) break

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

                if (events.cell_includes(map, player_pos, 1, null, 'Wall')) break

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
        })
    },
    cell_includes: (map, player_pos, x = 0, y = 0, text) => {
        try { return map[player_pos[1] + y].children[player_pos[0] + x].style.backgroundImage.includes(text) } catch { return true }
    },
    is_air: (map, player_pos, x = 0, y = 0) => {
        return events.cell_includes(map, player_pos, x, y, 'Floor')
    },
    move_player: (bool, map, player, player_pos, x = 0, y = 0) => {
        if (bool) {
            if (!events.is_air(map, player_pos, x * 2, y * 2)) return
            else {
                global.pressCount++
                global.lastPlayerPos = player_pos
        
                player.css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
                player.css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
            }
        } else {
            global.pressCount++
            global.lastPlayerPos = player_pos
            global.lastCratePos = null
    
            player.css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
            player.css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
        }
    },
    move_crate: (bool, map, player_pos, crates_pos, x = 0, y = 0) => {
        if (bool && events.is_air(map, player_pos, x, y)) {
            for (let i = 0; i < $('.crates').length; i++) {
                if ((parseInt($('.crates').eq(i).css('left')) - 50) / 32 === player_pos[0] + (x / 2) &&
                (parseInt($('.crates').eq(i).css('top')) - 80) / 32 === player_pos[1] + (y / 2)) {
                    for (let j = 0; j < crates_pos.length; j++) {
                        if ((player_pos[0] + x === crates_pos[j][0]) &&
                        (player_pos[1] + y === crates_pos[j][1])) {
                            global.lastCratePos = null
                            return false
                        }
                    }
                        
                    global.lastCratePos = [(parseInt($('.crates').eq(i).css('left')) - 50) / 32, (parseInt($('.crates').eq(i).css('top')) - 80) / 32, i]
                    $('.crates').eq(i).css('left', ((player_pos[0] + x) * 32 + 50) + 'px')
                    $('.crates').eq(i).css('top', ((player_pos[1] + y) * 32 + 80) + 'px')
                    break
                }
            }
        } else {
            global.lastCratePos = null
        }
        return true
    },
    is_level_completed: () => {
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

        if (count === crates_pos.length) {
            return true
        } else {
            return false
        }
    },
    game_end_check: async(map) => {
        while (!events.is_level_completed(map)) {
            await new Promise(r => global.setTimeout(r, 10))
        }

        let score = events.get_score(map, levelgen.get_map_reqs(map))
        
        if (score !== 0) {
            let nextMap

            if (map.split(',')[1].charAt(0) == 0) {
                nextMap = parseInt(map.split(',')[1].charAt(1), 10) + 1
                if (nextMap < 10) { nextMap = '0' + nextMap }
            } else {
                nextMap = parseInt(map.split(',')[1], 10) + 1
            }

            saves.game(map, nextMap, (parseInt(map.split(',')[2]) + score), 0, '00-00-00', false)

            infobox.createInfobox('completed', [map, score])
        } else { infobox.createInfobox('completed', map) }
    },
    get_score: function(map, req) {
        let localScore = 0
        
        if (map.includes('sav')) {
            localScore++
            if (global.pressCount <= req[0]) localScore++
            if (timer.convert_hms_to_milis(timer.get_end_time().replace(/:/g, '-')) <= req[1]) localScore++
        }

        return localScore
    }
}
