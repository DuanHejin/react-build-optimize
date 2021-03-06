process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
// 为了验证方便，关闭eslint-webpack-plugin，加快打包速度
process.env.DISABLE_ESLINT_PLUGIN = 'true';

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfigProd = require('react-scripts/config/webpack.config')('production');

// this one is optional, just for better feedback on build
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const green = (text) => {
    return chalk.green.bold(text);
};

// pushing BundleAnalyzerPlugin to plugins array
webpackConfigProd.plugins.push(new BundleAnalyzerPlugin());

// optional - pushing progress-bar plugin for better feedback;
// it can and will work without progress-bar,
// but during build time you will not see any messages for 10-60 seconds (depends on the size of the project)
// and decide that compilation is kind of hang up on you; progress bar shows nice progression of webpack compilation
webpackConfigProd.plugins.push(
    new ProgressBarPlugin({
        format: `${green('analyzing...')} ${green('[:bar]')}${green('[:percent]')}${green(
            '[:elapsed seconds]',
        )} - :msg`,
    }),
);

// 增加lodash-webpack-plugin
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// webpackConfigProd.plugins.push(new LodashModuleReplacementPlugin())

// 加入speed-measure-webpack-plugin，查看打包时每个步骤消耗的时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const smpConfig = smp.wrap(webpackConfigProd);

// // Remove all content but keep the directory so that
// // if you're in it, you don't end up in Trash
const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
fs.emptyDirSync(paths.appBuild);

// actually running compilation and waiting for plugin to start explorer
webpack(smpConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err);
    }
});
