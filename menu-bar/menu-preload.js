const {
    getCurrentWindow,
    openMenu,
    minimizeWindow,
    closeWindow,
    home,
} = require('./menu-functions')

window.addEventListener('DOMContentLoaded', () => {
    window.getCurrentWindow = getCurrentWindow
    window.openMenu = openMenu
    window.minimizeWindow = minimizeWindow
    window.closeWindow = closeWindow
    window.home = home
})