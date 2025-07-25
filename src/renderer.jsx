/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// the below was some test functions from before remaking shoing how to use renderer with raw javascript

// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// const testfunc = async ()=> {
//     const response = await window.versions.ping()
//     console.log(response)
// }

// testfunc()

import './index.css';
import './app.jsx';
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

console.log('👋 This message is being logged by "renderer.js", included via webpack');
window.versions.ping("arg from renderer.js")
let filesReturned = window.versions.requestFiles("path requested")



console.log(await filesReturned)

// actual bit that renders react app
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
