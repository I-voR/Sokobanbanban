import { funcs } from './funcs.js'

const $ = require('jquery')
// eslint-disable-next-line no-unused-vars
const dt = require('datatables.net')( window, $ )
const fs = require('fs')

export const data = {
    table: () => {
        let data = fs.readFileSync(escape(funcs.cwd() + 'hall/data.csv').replace(/%3A/g, ':')).toString().split('\n')

        data = data.filter(function(currentLine) {
            return currentLine !== '\n'
        })
        data = data.filter(function(currentLine) {
            return currentLine !== ''
        })

        data.forEach((el, index) => {
            data[index] = data[index].split(',')
        })

        $('#leaderboard').append('<thead><tr><th>' + data[0][0] + '</th><th>' + data[0][1] + '</th><th>' + data[0][2] + '</th><th>' + data[0][3] + '</th></tr></thead> <tbody>')
        for (let i = 1; i < data.length; i++) {
            data[i][0] = $('<div/>').text(data[i][0].replace(/&comma/g, ',')).html()
            data[i][1] = $('<div/>').text(data[i][1].replace(/&comma/g, ',')).html()
            data[i][2] = $('<div/>').text(data[i][2].replace(/&comma/g, ',')).html()
            data[i][3] = $('<div/>').text(data[i][3].replace(/&comma/g, ',')).html()
            $('#leaderboard').append($('<tr><td>' + data[i][0] + '</td><td>' + data[i][1] + '</td><td>' + data[i][2] + '</td><td>' + data[i][3] + '</td></tr>'))
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

let CSVs = fs.readdirSync(escape(funcs.cwd() + 'hall/').replace(/%3A/g, ':'))
if (CSVs.length == 0) {
    fs.createWriteStream(escape(funcs.cwd() + './hall/data.csv').replace(/%3A/g, ':')).on('error', (err) => {
        if (err) throw err
    })
    fs.createWriteStream(escape(funcs.cwd() + './hall/data.csv').replace(/%3A/g, ':')).write('Username,Score,Final Level,Date' + '\n')
    fs.createWriteStream(escape(funcs.cwd() + './hall/data.csv').replace(/%3A/g, ':')).end()
}

data.table()