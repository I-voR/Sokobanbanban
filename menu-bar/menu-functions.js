const { remote } = require('electron')

module.exports = {
    minimizeWindow: function(browserWindow = remote.getCurrentWindow()) {
        if (browserWindow.minimizable) {
            browserWindow.minimize()
        }
    },
    closeWindow: function(browserWindow = remote.getCurrentWindow()) {
        browserWindow.close()
    },
    home: function() { window.location.href='../index.html' }
}
