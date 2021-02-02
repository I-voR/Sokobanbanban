const { remote } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn')
    const consoleButton = document.getElementById('console-btn')
    const minimizeButton = document.getElementById('minimize-btn')
    const closeButton = document.getElementById('close-btn')

    if (!window.location.href.includes('index')) {
        const homeButton = document.getElementById('home-btn')
        homeButton.addEventListener('click', () => {
            window.home()
        })
    }

    menuButton.addEventListener('click', () => {
        window.openMenu(0, 30)
    })

    consoleButton.addEventListener('click', () => {
        remote.getCurrentWindow().webContents.openDevTools()
    })

    minimizeButton.addEventListener('click', () => {
        window.minimizeWindow()
    })

    closeButton.addEventListener('click', () => {
        window.closeWindow()
    })
})
