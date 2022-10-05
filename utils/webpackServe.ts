import { app } from 'electron';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import configWebpack from './webpack.config';
import configDevServer from './webpack.server';


export default async function runServer () {
    if (app.isPackaged) { return true; }

    return new Promise(async (resolve, reject) => {
        const compiler = await webpack({ ...configWebpack, mode: 'development' })
            , server = new WebpackDevServer(configDevServer, compiler);

        try {
            await server.start();
        } catch (error) {
            await server.stop();
            reject(error);
        }

        resolve(server);
    })
}