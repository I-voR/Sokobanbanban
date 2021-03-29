import { funcs } from '../funcs.js'

const fs = require('fs')

export const hall = {
    send: (save, userName) => {
        let saves = fs.readdirSync(funcs.cwd() + 'hall/')
        if (saves.length == 0) {
            fs.createWriteStream(funcs.cwd() + 'hall/data.csv').on('error', (err) => {
                if (err) throw err
            })
            fs.createWriteStream(funcs.cwd() + 'hall/data.csv').write('Username,Score,Final Level,Date' + '\n')
            fs.createWriteStream(funcs.cwd() + 'hall/data.csv').end()
        }

        let saveFile = funcs.cwd() + 'saves/' + save
        //let saves = fs.readdirSync(path)
        //window.location.href = funcs.cwd() + 'static/level.html?' + '1' + saves[selected]
        fs.unlink(saveFile, (err) => {
            if (err) throw err
        })

        save = save.split(',')
        let timeStamp = new Date().toISOString().slice(0, -5).replace(/:/g, '-').replace('T', '_')
        let line = userName.replace(/,/g, '&comma') + ',' + save[2] + ',' + save[1] + ',' + timeStamp + '\n'

        fs.appendFileSync(funcs.cwd() + 'hall/data.csv', line)
    }
}


