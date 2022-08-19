import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      scss({
        output: true,
        failOnError: true,
        outputStyle: 'compressed',
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      peerDepsExternal(),
      resolve(),
      typescript({
        sourceMap: true,
        declaration: true,
        exclude: ['**/*.test.*', '**/*.stories.*'],
        skipLibCheck: true,
        cacheDir: 'node_modules/.cache',
      }),
      terser(),
    ],
  },
];
