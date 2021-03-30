import { funcs } from '../funcs.js'

const $ = require('jquery')
const fs = require('fs')

export const slots = {
    main: function() {
        let path = funcs.cwd() + 'saves/'
        let saves = fs.readdirSync(path)
        let saveDefault = ',01,0,0,00-00-00.sav'
        let asc = funcs.cwd() + 'maps/ascending/01.map'
        
        switch (saves.length) {
        case 0:
            fs.copyFile(asc, path + 1 + saveDefault, (err) => { if (err) throw err })
            fs.copyFile(asc, path + 2 + saveDefault, (err) => { if (err) throw err })
            fs.copyFile(asc, path + 3 + saveDefault, (err) => { if (err) throw err })
            break
        case 1:
            if (saves[0].charAt(0) == '1') {
                fs.copyFile(asc, path + 2 + saveDefault, (err) => { if (err) throw err })
                fs.copyFile(asc, path + 3 + saveDefault, (err) => { if (err) throw err })
            }
            if (saves[0].charAt(0) == '2') {
                fs.copyFile(asc, path + 1 + saveDefault, (err) => { if (err) throw err })
                fs.copyFile(asc, path + 3 + saveDefault, (err) => { if (err) throw err })
            } else {
                fs.copyFile(asc, path + 2 + saveDefault, (err) => { if (err) throw err })
                fs.copyFile(asc, path + 1 + saveDefault, (err) => { if (err) throw err })
            }
            break
        case 2:
            if (saves[0].charAt(0) == '2') {
                fs.copyFile(asc, path + 1 + saveDefault, (err) => { if (err) throw err })
            }
            if (saves[1].charAt(0) == '2') {
                fs.copyFile(asc, path + 3 + saveDefault, (err) => { if (err) throw err })
            } else {
                fs.copyFile(asc, path + 2 + saveDefault, (err) => { if (err) throw err })
            }
    
            break
        }
        saves = fs.readdirSync(path)
        //struktura nazwy pliku zapisu: sejw,poziom,gwiazdki,timer mapy.sav
    
        $('#save1').append('<br>').append(encodeURI('Level ' + saves[0].split('.')[0].split(',')[1]).replace(/%20/g, ' ')).append('<br>').append(encodeURI(saves[0].split('.')[0].split(',')[2] + ' &#11088;').replace(/%20/g, ' '))
        $('#save2').append('<br>').append(encodeURI('Level ' + saves[1].split('.')[0].split(',')[1]).replace(/%20/g, ' ')).append('<br>').append(encodeURI(saves[1].split('.')[0].split(',')[2] + ' &#11088;').replace(/%20/g, ' '))
        $('#save3').append('<br>').append(encodeURI('Level ' + saves[2].split('.')[0].split(',')[1]).replace(/%20/g, ' ')).append('<br>').append(encodeURI(saves[2].split('.')[0].split(',')[2] + ' &#11088;').replace(/%20/g, ' '))
    
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
        let saves = fs.readdirSync(path)
        //let save = fs.readFileSync(path + '/' + saves[selected]).toString().split('\n')
        location.href = funcs.cwd() + 'static/level.html?' + saves[selected]
    },
}

$(slots.main())
