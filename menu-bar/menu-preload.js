const {
    getCurrentWindow,
    openMenu,
    minimizeWindow,
    closeWindow,
} = require('./menu-functions')

window.addEventListener('DOMContentLoaded', () => {
    window.getCurrentWindow = getCurrentWindow
    window.openMenu = openMenu
    window.minimizeWindow = minimizeWindow
    window.closeWindow = closeWindow
})