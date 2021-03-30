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
            timer.convert_hms_to_milis(map.split(',')[4].substr(0, 8)) : 0
                
        let start = Date.now() - offset
        
        while ( !(events.is_level_completed(map) || global.pauseGame) ) {
            await timer.sleep(0.1)
            await timer.set_time( await timer.time_diff(start) )
        }
        
        $('body').off('keydown')
    },
    time_diff: async( start ) => { return Date.now() - start },
    sleep: async( time ) => {
        await new Promise( r => window.setTimeout(r, time) )
    },
    set_time: async( time ) => {
        $('#timer').text( new Date(time).toISOString().slice(11,-5) )
    },
    get_end_time: () => {
        return $.find('#timer')[0].textContent
    },
    convert_hms_to_milis: (hms) => {
        return hms.split('-').reduce((acc,time) => (60 * acc) + +time) * 1000
    }
}
