//const events = require('../game/events');
function get_score(map, req) {
    let localScore = 0

    if (map.includes('sav')) {
        localScore++
        if (global.pressCount <= req[0]) localScore++
        if (timer.convert_hms_to_milis(timer.get_end_time() <= req[1])) localScore++
    }

    return localScore
}


test('Returns 0 if not getting save file', () => {
    expect(get_score('02.map', '40:1000')).toBe(0);
});