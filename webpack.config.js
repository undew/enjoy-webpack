module.exports = {
    watch: true,
    watchOptions: {
        ignored:/node_modules/
    },
    mode: 'production',
    devtool: 'inline-source-map',
  entry: './src/index.js', 
  output: {
    path: __dirname + '/dist',
    filename: './js/sample.js',
  },
  module: {
    rules: [
      
      {
        test: /\.js[x]?$/,
        // .jsxも対象に含むため、正規表現を行う。
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presetsは後ろから順に変換されるので、react->envの順に記入する。
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-syntax-jsx']
            // JSXをパースする用の指定
          }
        }
        
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
    // import文で拡張子省略をしたいため、.jsxも省略可能対象にする。
  }
};