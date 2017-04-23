// load the default config generator.
const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

/**
 * Webpack config for Storybook
 * In reality, most project will use Webpack2, TS, React to bundle the build
 * So the configuration here is also a mimic/prove for the client projects who use ui-widgets-ts package.
 */
module.exports = function (config, env) {
    const default_config = genDefaultConfig(config, env);

    // Extend it as you need.
    const final_config = webpackMerge.smart(default_config, {
        module: {
            loaders: [
                {
                    test: /\.ts(x)?$/,
                    loaders: ['ts-loader']
                },
                { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" }
            ]
        },

        resolve: {
            // Resolve alias so as to make import { Button } from "ui-widgets" works
            alias: {
                "ui-widgets-ts": path.resolve(__dirname, "../../dist")
            }
        }
    });

    return final_config;
};