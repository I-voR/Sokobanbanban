const { app, BrowserWindow } = require('electron')
const path = require('path')

let win

// eslint-disable-next-line require-jsdoc
function createWindow() {
    win = new BrowserWindow({
        frame: false,
        width: 960 + 100,
        height: 670 + 100,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            // devTools: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, '/menu-bar/menu-preload.js')
        }
    })

    win.loadFile('index.html')
    win.setResizable(false)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
