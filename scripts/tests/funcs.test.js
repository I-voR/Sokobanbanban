//const funcs = require('../funcs');

function cwd() {
    const fs = require('fs')
    let cwd = process.cwd().replace(/\\/g, '/') + '/'

    for (const key in fs.readdirSync(cwd)) {
        if (fs.readdirSync(cwd)[key] === 'resources') {
            cwd += 'resources/app/'
            break
        }
    }

    return cwd
}

test('Returns path to games core', () => {
    expect(typeof cwd()).toBe('string');
});