const zlib = require('zlib');
const mime = require('mime');
const config = require('../config');
const validator = require('validator');
const OSS = require('ali-oss').Wrapper;
const client = new OSS(config.oss);

const mimeRegex = /^data:(.*);/;

function put(name, str, options) {

  return new Promise((resolve, reject) => {
    
    const cleanStr = str.replace(/^.*?base64,/g, '');

    if (validator.isBase64(cleanStr)) {
      let type = str.match(mimeRegex)[1];
      let ext = mime.getExtension(type);
      zlib.gzip(new Buffer(cleanStr, 'base64'), (error, gzipResult) => {
        
        if (error) reject(error);
        else 
          client.put(`${name}.${Date.now()}.${ext}`, gzipResult, Object.assign({}, {
            mime: type,
            headers: {
              'Content-Encoding': 'gzip',
            },
          }, options))
            .then(result => resolve(result.name))
            .catch(error => reject(error));
      });
    }
    else 
      resolve(str);
  });
}

module.exports.put = put;