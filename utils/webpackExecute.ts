import * as webpack from 'webpack';
import { app } from 'electron';
import configWebpack from './webpack.config';

const configWebpackProd: webpack.Configuration = { ...configWebpack, mode: 'production' };

function execute () {
    if (app.isPackaged) { return true; }

    return new Promise((resolve, reject) => {
        webpack(
            configWebpackProd,
            (err, stats) => {
                if (!stats) {
                    return reject('Err. no infos');
                }

                const info = stats.toJson();
                if (stats.hasErrors()) {
                    return reject(info.errors);
                }
                if (stats && stats.hasWarnings()) { 
                    return console.warn(info.warnings);
                }

                resolve(info);
            }
        );
    })
}

export default execute;