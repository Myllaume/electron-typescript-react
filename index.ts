import { app } from 'electron';
import webpackServe from './utils/webpackServe';
// import mainWindow from '../windows/main';

Promise.all([webpackServe(), app.whenReady()])
    .then(([webpackServeControl, _]) => {
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