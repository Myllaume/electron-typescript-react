import * as path from 'path';
import { Configuration } from 'webpack-dev-server';

const devServer: Configuration = {
    static: {
        directory: path.join(__dirname, '../views')
    },
    port: 9000,
    open: false
};

export default devServer;