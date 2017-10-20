import path from 'path'
import webpack from 'webpack'

const options = {
  entry: {
    index: './src/renderer/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'bundle.[name].js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ]
}

export default options
