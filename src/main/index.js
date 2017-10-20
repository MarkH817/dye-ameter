const {app, BrowserWindow, ipcMain} = require('electron')

const isDevelopment = process.env.NODE_ENV !== 'production'

// Global reference to mainWindow
// Necessary to prevent win from being garbage collected
let mainWindow

function createMainWindow () {
  // Construct new BrowserWindow
  const window = new BrowserWindow()

  // Set url for `win`
  let port = 3000
  let devUrl = `http://localhost:${port}`

  const url = isDevelopment
    ? devUrl
    : `file://${__dirname}/index.html`

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  window.loadURL(url)

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open
  // until the user explicitly quits
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On macOS it is common to re-create a window
  // even after all windows have been closed
  if (mainWindow === null) mainWindow = createMainWindow()
})

// Create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})

ipcMain.on('hello', (event) => {
  console.log('Hello')
})
