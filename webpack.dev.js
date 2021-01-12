const path = require('path');
const { merge } = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート

// common設定とマージする
module.exports = merge(common, {
  mode: 'development', // 開発モード

  output: {
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js',
  },

  devtool: 'eval-source-map', // 開発用ソースマップ (高速)
})