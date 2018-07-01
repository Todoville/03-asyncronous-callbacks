'use strict';

const fileReader = require('./lib/file-reader');
const logger = require('./lib/logger');

const text1 = `${__dirname}/./lib/assets/1.txt`;
const text2 = `${__dirname}/./lib/assets/2.txt`;
const text3 = `${__dirname}/./lib/assets/3.txt`;

console.log(fileReader.readThreeFiles(text1, text2, text3, (err, data1, data2, data3) => { /* eslint-disable-line */
  logger.log(logger.INFO, data1);
  logger.log(logger.INFO, data2);
  logger.log(logger.INFO, data3);
}));
