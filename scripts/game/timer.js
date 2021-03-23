/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Timer
*/

import { events } from './events.js'

export const timer = {
    main: async( map ) => {
        let start = Date.now()

        while ( !events.is_level_completed(map) ) {
            await timer.sleep(0.1)
            await timer.set_time( await timer.time_diff(start) )
        }
    },
    time_diff: async( start ) => { return Date.now() - start },
    sleep: async( time ) => {
        await new Promise( r => window.setTimeout(r, time) )
    },
    set_time: async( time ) => {
        $('#timer').text( new Date(time).toISOString().slice(11,-5) )
    },
    get_end_time: () => {
        return $('#timer').text()
    }
}
