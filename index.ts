import { app } from 'electron';
import webpackServe from './utils/webpackServe';
import webpackExecute from './utils/webpackExecute';
import mainWindow from './views/main/window';

Promise.all([webpackExecute(), webpackServe(), app.whenReady()])
    .then(([webpackServeControl, _]) => {
        console.log('Application lancée');
        
        
        mainWindow.open();
        // mainWindow();
        // webpackServeControl.close();
    })
    .catch((err) => {
        console.error(err);
        app.quit();
    })

app.on('window-all-closed', () => {
    app.quit();
});