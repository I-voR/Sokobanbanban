/* eslint-disable require-jsdoc */
const { remote, ipcRenderer } = require('electron')

function getCurrentWindow() {
    return remote.getCurrentWindow()
}

function openMenu(x, y) {
    ipcRenderer.send('display-app-menu', { x, y })
}

function minimizeWindow(browserWindow = getCurrentWindow()) {
    if (browserWindow.minimizable) {
        browserWindow.minimize()
    }
}

function closeWindow(browserWindow = getCurrentWindow()) {
    browserWindow.close()
}

module.exports = {
    getCurrentWindow,
    openMenu,
    minimizeWindow,
    closeWindow,
}