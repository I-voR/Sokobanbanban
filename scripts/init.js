/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * File init
*/

import { funcs } from './funcs.js'
const fs = require('fs')

/** 
* Function used create all missing files and directories
*/
function initiateFiles() {
    let path = funcs.cwd() + './'
    let dirList = fs.readdirSync(escape(path).replace(/%3A/g, ':'))

    if (dirList.find(element => element === 'hall') === undefined) {
        fs.mkdirSync(escape(path + 'hall').replace(/%3A/g, ':'))
    }
    if (dirList.find(element => element === 'saves') === undefined) {
        fs.mkdirSync((path + 'saves').replace(/%3A/g, ':'))
    }
    path = funcs.cwd() + 'saves/'

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
        } else if (saves[0].charAt(0) == '2') {
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
        }else if (saves[1].charAt(0) == '2') {
            fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 3 + saveDefault, (err) => { if (err) throw err })
        } else {
            fs.copyFile(escape(asc).replace(/%3A/g, ':'), path + 2 + saveDefault, (err) => { if (err) throw err })
        }
        break
    }
}

initiateFiles()
