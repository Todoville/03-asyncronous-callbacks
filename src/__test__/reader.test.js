'use strict';

const fs = require('fs');

const fileReader = require('../lib/file-reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;
const mockText2 = `${__dirname}/./mock-assets/2.txt`;
const mockText3 = `${__dirname}/./mock-assets/3.txt`;

let mockData = [];

describe('testing the ol filereaderino', () => {
  beforeAll(() => {
    mockData = [
      fs.readFileSync(mockText1, { encoding: 'utf-8' }),
      fs.readFileSync(mockText2, { encoding: 'utf-8' }),
      fs.readFileSync(mockText3, { encoding: 'utf-8' }),
    ];
  });

  test('should show that the data in our readThreeFiles function is equivalent to the data in our mockData array', () => {
    fileReader.readThreeFiles(mockData, (err, data1, data2, data3) => { 
      if (err) throw err;
      expect(data1).toEqual(mockData[0]);
      expect(data2).toEqual(mockData[1]);
      expect(data3).toEqual(mockData[2]);
      expect(err).toBeNull();
    });
  }); 

  test('this here should return a bad filepath error on item 1', () => {
    fileReader.readThreeFiles('bad path', mockText2, mockText3, (err, data1, data2, data3) => { /* eslint-disable-line */
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
});
