// ./public/electron.js
const path = require('path');
const electron = require('electron')
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const globalShortcut = electron.globalShortcut;

function createWindow() {

    // Create the browser window.
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        // img : path.join(__dirname, './assets/logo.png'),
        autoHideMenuBar: true,
        frame: false,
        // transparent: true
    });

    globalShortcut.register('f5', function () {
        win.reload()
    })

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:9090'
            : `file://${path.join(__dirname, './dist/index.html')}`
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
