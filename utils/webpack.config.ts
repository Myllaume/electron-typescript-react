import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

type View = {
    name: string,
    path: string
}

const views: View[] = [
    { name: 'main', path: './src/views/main/render.tsx' },
    { name: 'config', path: './src/views/config/render.tsx' },
];

const config: Configuration = {
    entry: {
        main: path.join(__dirname, '../../views/main/render.tsx')
    },
    output: {
        path: path.join(__dirname, '../views'), // path to /dist/views
        filename: '[name]-bundle.js'
    },
    plugins: [
        ...['main'].map(entry => {
            return new HtmlWebpackPlugin({
                filename: `${entry}.html`,
                title: entry,
                template: path.join(__dirname, '../../views/template.html'),
                chunks: [entry]
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.join(__dirname, '../../views/tsconfig.json')
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: "development",
    stats: 'errors-only'
}

export default config;