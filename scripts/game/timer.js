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
        let offset = map.includes('sav') ?
            timer.convert_hms_to_milis(map.substring(map.indexOf(':') + 9, map.length - 4)) : 0
                
        let start = Date.now() - offset
        
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
    },
    convert_hms_to_milis: (hms) => {
        return hms.split('-').reduce((acc,time) => (60 * acc) + +time) * 1000
    }
}
