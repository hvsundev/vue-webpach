// path 라이브러리를 가져와서 path 변수에 담은 것
var path = require('path');

// entry에 있는걸 돌려서 output(결과)를 낸다.
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};