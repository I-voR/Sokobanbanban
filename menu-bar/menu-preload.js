const {
    minimizeWindow,
    closeWindow,
    home,
} = require('./menu-functions')

window.addEventListener('DOMContentLoaded', () => {
    window.minimizeWindow = minimizeWindow
    window.closeWindow = closeWindow
    window.home = home
})
