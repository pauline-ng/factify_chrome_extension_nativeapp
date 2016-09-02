'use strict';

const electron = require("electron");

// electron app controler
const app = electron.app;

// electron window controler
const BrowserWindow = electron.BrowserWindow;

// Let main window be global variable so it won't be GC-ed.
let mainWindow;

// End the app when all the window is closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Entry point - to be executed right after Electron is initialized.
app.on('ready', function() {
  // Show developer tool to debug
  //mainWindow.toggleDevTools();

  // Render main window.
  mainWindow = new BrowserWindow({width: 500, height: 500});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

	//mainWindow.toggleDevTools();
  // Terminate the window when it's closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});