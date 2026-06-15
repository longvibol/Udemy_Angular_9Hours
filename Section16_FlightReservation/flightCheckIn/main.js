const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Important for older configurations/Angular 11 compatibility
    }
  });

  // CRITICAL: Point Electron to your Angular build folder
  // Replace 'your-project-name' with the actual folder name inside /dist
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `dist/flightCheckIn/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );

  // Open DevTools if you want to debug (optional)
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});