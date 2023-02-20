const { app, BrowserWindow, ipcMain } = require("electron");

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 900,
    height: 900,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(createWindow);

