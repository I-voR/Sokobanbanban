
//const timer = require('../game/timer');

function convert_hms_to_milis(hms) {
    return (' ' + hms).split('-').reduce((acc, time) => (60 * acc) + +time) * 1000
}

test('Gives timer time, gets miliseconds', () => {
    expect(convert_hms_to_milis('15-45-45')).toBe(56745000);
    expect(convert_hms_to_milis('12-32-00')).toBe(45120000);
    expect(convert_hms_to_milis('11-55-00')).toBe(42900000);
    expect(convert_hms_to_milis('05-46-00')).toBe(20760000);
    expect(convert_hms_to_milis('00-27-50')).toBe(1670000);
    expect(convert_hms_to_milis('00-29-40')).toBe(1780000);
    expect(convert_hms_to_milis('00-39-35')).toBe(2375000);
    expect(convert_hms_to_milis('03-00-26')).toBe(10826000);
    expect(convert_hms_to_milis('15-05-22')).toBe(54322000);
    expect(convert_hms_to_milis('00-00-11')).toBe(11000);
    expect(convert_hms_to_milis('08-08-41')).toBe(29321000);
});