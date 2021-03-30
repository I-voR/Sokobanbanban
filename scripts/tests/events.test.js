const events = require('../game/events');

test('Returns 0 if not getting save file', () => {
    expect(events.get_score('02.map', '40:1000')).toBe(0);
});