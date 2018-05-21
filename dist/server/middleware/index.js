'use strict';

var fs = require('fs');
var path = require('path');

function resolve(currentPath, space) {

  fs.readdirSync(currentPath).forEach(function (file) {

    var tempPath = path.join(currentPath, file);
    var stats = fs.statSync(tempPath);

    if (stats.isDirectory()) {
      space[file] = resolve(tempPath, {});
    } else if (stats.isFile() && path.extname(file) == '.js') {
      space[path.basename(file, '.js')] = require(tempPath);
    }
  });

  return space;
}

module.exports = resolve(__dirname, {});