const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
        type: 'asset/resource',
      },
    ] 
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    },
    open: true,
    liveReload: true,
  },
  resolve:{
    alias:{
      components: path.resolve(__dirname, 'src/components'),
      hoc: path.resolve(__dirname, 'src/HOC'),
      images: path.resolve(__dirname, 'src/images'),
      assets: path.resolve(__dirname, 'src/assets'),
      pages: path.resolve (__dirname, 'src/pages')
    }
    
  }
}
