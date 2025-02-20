import { contextBridge, ipcRenderer } from 'electron'

const api = {
  send: (channel, data) => ipcRenderer.send(channel, data),
  receive: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(...args)),
  invoke: (channel, data) => ipcRenderer.invoke(channel, data) // <== IMPORTANT
}

contextBridge.exposeInMainWorld('api', api)
