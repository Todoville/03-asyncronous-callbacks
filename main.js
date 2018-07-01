'use strict';

const fs = require('fs');
const logger = require('logger');

const fileReader = module.exports = {};

fileReader.readFile = (filePath) => {
  return fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    logger.log(logger.INFO, data.toString());
  });
};


fileReader.readThreeFiles(fileArr, callback) => {
  return fs.readFile(fileArr, (err, data1) => {
    if (err) return callback(err);
  }
}

fileReader.readThreeFiles(fileArr, callback)