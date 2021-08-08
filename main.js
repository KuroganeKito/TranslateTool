const { app, BrowserWindow, globalShortcut } = require("electron")

process.env.NODE_ENV = "development"

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 600,
        height: 600,
        icon: `file:///${__dirname}/src/favicon.ico`
    })

    win.loadURL(`file:///${__dirname}/dist/TranslateTool/index.html`)
    win.on("closed", function(){
        win = null
    })
}

app.on("ready", () => {
    createWindow()

    globalShortcut.register("Ctrl+R", () => win.reload())
    globalShortcut.register("Ctrl+Shift+I", () => win.toggleDevTools())

    win.on("ready", () => (win = null))
})
app.on("window-all-closed", function(){ if(process.platform !== "darwin"){ app.quit() } })
app.on("activate", function(){ if(win === null){ createWindow() } })

app.allowRendererProcessReuse = true
