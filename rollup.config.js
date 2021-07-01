import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
}

const external = Object.keys(globals)

const extensions = ['.ts', '.tsx']

const babelOptions = {
  extensions,
  babelrc: false, // to ignore @babel/transform-runtime
  exclude: 'node_modules/**',
  presets: ['@babel/typescript', '@babel/env', '@babel/react'],
}

export default (opts) => {
  const options = Object.assign(
    {
      css: true,
    },
    opts
  )

  return {
    input: options.input,
    output: [
      { format: 'cjs', file: './dist/index.cjs.js', sourcemap: false },
      { format: 'es', file: './dist/index.es.js', sourcemap: false },
      {
        name: 'Beyond',
        format: 'umd',
        file: './dist/index.umd.js',
        globals: {
          react: 'React',
          'prop-types': 'PropTypes',
        },
      },
    ],
    external,
    plugins: [
      resolve({
        extensions,
      }),
      babel(babelOptions),
      postcss({
        extract: 'style.css',
      }),
      terser(),
    ],
  }
}
