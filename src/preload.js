// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


// below is example stuff we had before remaking showing how preload works.
// const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('pang')
//   // we can also expose variables, not just functions
// })


// import { contextBridge } from 'electron';
// import { electronAPI } from '@electron-toolkit/preload';
// import * as fs from 'fs';

// const api = {
//   readdirS: async (path) =>
//     await fs.readdirSync(path, { encoding: 'utf-8', withFileTypes: true }),
//   isDirectory: (path) => fs.lstatSync(path).isDirectory(),
// };

// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI);
//     contextBridge.exposeInMainWorld('api', api);
//   } catch (error) {
//     console.error(error);
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI;
//   // @ts-ignore (define in dts)
//   window.api = api;
// }

import readdir from "fs/promises"
import { contextBridge} from "electron"
// let { readdir } = require("fs/promises")
// let { contextBridge } = require("electron")

let directoryContents = async (path) => {
  let results = await readdir(path, {withFileTypes: true})
  return results.map(entry => ({
    name: entry.name,
    type: entry.isDirectory() ? "directory" : "file",
  }))
}

let currentDirectory = () => {
  return process.cwd()
}

contextBridge.exposeInMainWorld(
  "api", { directoryContents, currentDirectory }
)
