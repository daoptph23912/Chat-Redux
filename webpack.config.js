const path = require('path');

module.exports = {
  entry: './src/index.js', // Thay đổi theo cấu trúc dự án của bạn
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // Các quy tắc khác
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg'],
  },
  // Các cấu hình khác của Webpack
};
