/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Special functions
*/

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

        return escape(cwd).replace('%3A', ':')
    }
}
