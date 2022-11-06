const buildJs = require('./utils').buildJs;

Promise.all([
  buildJs({
    input: './src/js/parse.ts',
    format: 'umd',
    minify: false,
    name: 'parseMTEvent',
    sourcemap: false
  }),
  buildJs({
    input: './src/js/parse.ts',
    format: 'umd',
    minify: true,
    name: 'parseMTEvent',
    sourcemap: false
  }),
]).catch(console.error);