const {ipcRenderer} = window.require('electron')

function notify (event, id) {
  ipcRenderer.send(id)
}

export {notify}
