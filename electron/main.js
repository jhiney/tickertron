const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    show: false,
  });
  const startURL = isDev
    ? "http://localhost:3000/tickertron"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startURL);

  //this removes the top bar
  mainWindow.removeMenu();

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
