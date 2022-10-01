import { app } from 'electron';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import configWebpack from './webpack.config';
import configDevServer from './webpack.server';


export default async function runServer () {
    if (app.isPackaged === true) {
        return true;
    }

    const compiler = await webpack(configWebpack)
        , server = new WebpackDevServer(configDevServer, compiler);

    return new Promise(async (resolve, reject) => {
        try {
            await server.start();
        } catch (error) {
            await server.stop();
            reject(error);
        }
        resolve(server);
    })
}