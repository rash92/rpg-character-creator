import { app, BrowserWindow, contextBridge, ipcMain, Menu } from 'electron';
import path from 'node:path'
import fs from 'fs';
import testContents from './files_to_read/test.json'

console.log(testContents.text)

console.log(__dirname)
let files = fs.readdirSync(__dirname);

console.log(files)
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('pang', async (event, arg1)=> {
  console.log("in main.js, recieved pang, arg1 is: ", arg1)
  return "ipc main handler returned"
})

ipcMain.handle('requestFiles', async (event, path)=>{
  console.log("path requested is: ", path)
  return files
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//stops the 'GetVSyncParametersIfAvailable() failed' error
app.disableHardwareAcceleration();
