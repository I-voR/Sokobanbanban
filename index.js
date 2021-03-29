const { app, BrowserWindow, ipcMain } = require('electron')
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
            enableRemoteModule: true,
            preload: path.join(__dirname, '/menu-bar/menu-preload.js')
        }
    })

    win.loadFile('index.html')
    win.setResizable(false)

    ipcMain.on('display-app-menu', function(e, args) {
        if (win) {
            menu.popup({
                window: win,
                x: args.x,
                y: args.y
            })
        }
    })
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
