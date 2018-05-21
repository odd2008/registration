'use strict';

var zlib = require('zlib');
var mime = require('mime');
var config = require('../config');
var validator = require('validator');
var OSS = require('ali-oss').Wrapper;
var client = new OSS(config.oss);

var mimeRegex = /^data:(.*);/;

function put(name, str, options) {

  return new Promise(function (resolve, reject) {

    var cleanStr = str.replace(/^.*?base64,/g, '');

    if (validator.isBase64(cleanStr)) {
      var type = str.match(mimeRegex)[1];
      var ext = mime.getExtension(type);
      zlib.gzip(new Buffer(cleanStr, 'base64'), function (error, gzipResult) {

        if (error) reject(error);else client.put(name + '.' + Date.now() + '.' + ext, gzipResult, Object.assign({}, {
          mime: type,
          headers: {
            'Content-Encoding': 'gzip'
          }
        }, options)).then(function (result) {
          return resolve(result.name);
        }).catch(function (error) {
          return reject(error);
        });
      });
    } else resolve(str);
  });
}

module.exports.put = put;