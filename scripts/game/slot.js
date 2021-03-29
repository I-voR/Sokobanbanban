import { funcs } from '../funcs.js'

const $ = require('jquery')
const fs = require('fs')

export const slots = {
    main: function() {
        let path = funcs.cwd() + 'saves/'
        let saves = fs.readdirSync(escape(path).replace(/%3A/g, ':'))
        let saveDefault = ',01,0,0,00-00-00.sav'
        let asc = funcs.cwd() + 'maps/ascending/01.map'
        
        switch (saves.length) {
        case 0:
            fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 1 + saveDefault, (err) => { if (err) throw err })
            fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 2 + saveDefault, (err) => { if (err) throw err })
            fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 3 + saveDefault, (err) => { if (err) throw err })
            break
        case 1:
            if (saves[0].charAt(0) == '1') {
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 2 + saveDefault, (err) => { if (err) throw err })
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 3 + saveDefault, (err) => { if (err) throw err })
            }
            if (saves[0].charAt(0) == '2') {
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 1 + saveDefault, (err) => { if (err) throw err })
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 3 + saveDefault, (err) => { if (err) throw err })
            } else {
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 2 + saveDefault, (err) => { if (err) throw err })
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 1 + saveDefault, (err) => { if (err) throw err })
            }
            break
        case 2:
            if (saves[0].charAt(0) == '2') {
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 1 + saveDefault, (err) => { if (err) throw err })
            }
            if (saves[1].charAt(0) == '2') {
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 3 + saveDefault, (err) => { if (err) throw err })
            } else {
                fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 2 + saveDefault, (err) => { if (err) throw err })
            }
    
            break
        }
        saves = fs.readdirSync(escape(path).replace(/%3A/g, ':'))
        //struktura nazwy pliku zapisu: sejw,poziom,gwiazdki,timer mapy.sav
    
        $('#save1').append('<br>').append('Level ' + saves[0].split('.')[0].split(',')[1]).append('<br>').append(saves[0].split('.')[0].split(',')[2] + ' &#11088;')
        $('#save2').append('<br>').append('Level ' + saves[1].split('.')[0].split(',')[1]).append('<br>').append(saves[1].split('.')[0].split(',')[2] + ' &#11088;')
        $('#save3').append('<br>').append('Level ' + saves[2].split('.')[0].split(',')[1]).append('<br>').append(saves[2].split('.')[0].split(',')[2] + ' &#11088;')
    
        $('#save1').on('click', () => {
            slots.loadSelected(0)
        })
        $('#save2').on('click', () => {
            slots.loadSelected(1)
        })
        $('#save3').on('click', () => {
            slots.loadSelected(2)
        })
    },
    loadSelected: (selected) => {
        let path = funcs.cwd() + 'saves/'
        let saves = fs.readdirSync(escape(path).replace(/%3A/g, ':'))
        //let save = fs.readFileSync(path + '/' + saves[selected]).toString().split('\n')
        location.href = (funcs.cwd() + 'static/level.html?' + saves[selected]).replace(/%3F/g, '?').replace(/%3A/g, ':')
    },
}

$(slots.main())
