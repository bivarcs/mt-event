const buildJs = require('./utils').buildJs;

Promise.all([
  buildJs({
    input: './src/js/parse.ts',
    minify: false,
    name: 'parse',
    format: 'cjs',
    sourcemap: false,
    exports: 'named',
  }),
  buildJs({
    input: './src/js/parse.ts',
    minify: true,
    name: 'parse',
    format: 'cjs',
    sourcemap: false,
    exports: 'named',
  }),
  buildJs({
    input: './src/js/parse.ts',
    minify: false,
    name: 'parse',
    format: 'esm',
    sourcemap: false,
    exports: 'named',
  }),
  buildJs({
    input: './src/js/parse.ts',
    minify: true,
    name: 'parse',
    format: 'esm',
    sourcemap: false,
    exports: 'named',
  }),
]).catch(console.error);