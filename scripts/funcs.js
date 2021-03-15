/* eslint-disable require-jsdoc */

const fs = require('fs')

export const funcs = {
    cwd: () => {
        let cwd = process.cwd().replace(/\\/g, '/') + '/'

        for (const key in fs.readdirSync(cwd)) {
            if (fs.readdirSync(cwd)[key] === 'resources') {
                cwd += 'resources/app/'
                break
            }
        }

        return cwd
    }
}