'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const calc = require('postcss-calc');

module.exports = {
  plugins: [
    importPlugin({
      root: path.resolve(__dirname, 'src'),
    }),

    autoprefixer(),
    calc(),

    customProperties({ preserve: false }),
    require('cssnano')({
      preset: 'default',
    }),
  ],

  map: false,
};
