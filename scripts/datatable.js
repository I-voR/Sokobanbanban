/* eslint-disable require-jsdoc */

// import { table } from 'console'
import { funcs } from './funcs.js'

const $ = require('jquery')
// eslint-disable-next-line no-unused-vars
const dt = require('datatables.net')( window, $ )
const fs = require('fs')

export const data = {
    table: () => {
        let data = fs.readFileSync(funcs.cwd() + 'hall/data.csv').toString().split('\n')

        data.forEach((element, index) => {
            data[index] = data[index].split(',')
        })

        $('#leaderboard').append('<thead><tr><th></th><th>' + data[0][0] + '</th><th>' + data[0][1] + '</th><th>Temp</th><th>Hum</th><th>' + data[0][2] + '</th><th>' + data[0][3] + '</th></tr></thead> <tbody>')
        for (let i = 1; i < data.length; i++) {
            $('#leaderboard').append($('<tr><td> <a href="http://' + data[i][0] + '">' + data[i][1] + '</a> </td><td>' + data[i][2] + '</td><td>' + data[i][3] + '</td></tr>'))
        }
        $('#leaderboard').append('</tbody>')

        $(function() {
            $('#leaderboard').DataTable({
                'pageLength': 10,
                'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']]
            })
        })
    }
}

let CSVs = fs.readdirSync(funcs.cwd() + 'hall/')
if (CSVs.length == 0) {
    fs.createWriteStream(funcs.cwd() + './hall/data.csv').on('error', (err) => {
        if (err) throw err
    })
    fs.createWriteStream(funcs.cwd() + './hall/data.csv').write('Username,Score,Final Level,Date' + '\n')
    fs.createWriteStream(funcs.cwd() + './hall/data.csv').end()
}

data.table()