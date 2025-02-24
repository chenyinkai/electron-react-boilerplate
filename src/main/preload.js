const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // ipcRenderer: {
  //   myPing() {
  //     ipcRenderer.send('ipc-example', 'ping');
  //   },
  //   on(channel, func) {
  //     const validChannels = ['ipc-example'];
  //     if (validChannels.includes(channel)) {
  //       // Deliberately strip event as it includes `sender`
  //       ipcRenderer.on(channel, (event, ...args) => func(...args));
  //     }
  //   },
  //   once(channel, func) {
  //     const validChannels = ['ipc-example'];
  //     if (validChannels.includes(channel)) {
  //       // Deliberately strip event as it includes `sender`
  //       ipcRenderer.once(channel, (event, ...args) => func(...args));
  //     }
  //   },
  // },
  sprite: {
    getSavedDir() {
      return ipcRenderer.invoke('sprite:get-saved-directory');
    },
    getMultipleImgs: () => ipcRenderer.invoke('sprite:select-mutiple-images'),
    saveFiles: () => ipcRenderer.invoke('sprite:save-file'),
  },
});
