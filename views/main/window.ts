import * as path from 'path';
import { app, BrowserWindow } from 'electron';
import { Window } from '../types';
import devServer from '../../utils/webpack.server';

const window = {
    payload: undefined,
    open: function() {
        if (window.payload instanceof BrowserWindow) {
            window.payload.focus();
        }

        window.payload = new BrowserWindow({
            width: 800,
            height: 600,
            show: false,
            backgroundColor: '#fefefe',
            // webPreferences: {
            //     preload: path.join(__dirname, 'preload.js')
            // }
        });

        window.payload.webContents.openDevTools({ mode: 'detach' });

        if (app.isPackaged === true) {
            window.payload.loadFile(path.join(__dirname, '../../dist/main.html'));
        } else {
            window.payload.loadURL(`http://localhost:${devServer.port}/main.html`);
        }

        window.payload.once('ready-to-show', () => {
            window.payload.show();
        });
    
        window.payload.once('closed', () => {
            window.payload = undefined;
        });

        return window.payload;
    },
    close() {
        window.payload.close();
        window.payload = undefined;
    }
} as Window;

export default window;