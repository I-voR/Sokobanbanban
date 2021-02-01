const { remote } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn')
    const consoleButton = document.getElementById('console-btn')
    const minimizeButton = document.getElementById('minimize-btn')
    const closeButton = document.getElementById('close-btn')

    menuButton.addEventListener('click', () => {
        // Opens menu at (x,y) coordinates of mouse click on the hamburger icon.
        // window.openMenu(e.x, e.y)
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