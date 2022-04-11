/*
* Martfury - Admin Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: n/a
* Updated at: n/a

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: "Farm 63"
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
