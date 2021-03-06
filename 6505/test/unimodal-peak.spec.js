'use strict';

var _      = require('lodash');
var expect = require('chai').expect;
var finder = require('../lib/unimodal-peak');

describe('unimodal-peak', function () {
  var tests;
  var index;

  it('finds the index of peak', function () {
    tests = [
      {array: [1],           expectedIndex: 0},
      {array: [2],           expectedIndex: 0},
      {array: [1,2],         expectedIndex: 1},
      {array: [2,1],         expectedIndex: 0},
      {array: [1,2,3],       expectedIndex: 2},
      {array: [3,2,1],       expectedIndex: 0},
      {array: [1,3,2],       expectedIndex: 1},
      {array: [1,2,3,4],     expectedIndex: 3},
      {array: [4,3,2,1],     expectedIndex: 0},
      {array: [1,4,3,2],     expectedIndex: 1},
      {array: [1,2,4,3],     expectedIndex: 2},
      {array: [1,2,3,4,5],   expectedIndex: 4},
      {array: [5,4,3,2,1],   expectedIndex: 0},
      {array: [1,2,5,4,3],   expectedIndex: 2},
      {array: [1,2,3,5,4],   expectedIndex: 3},
      {array: [1,5,4,3,2],   expectedIndex: 1},
      {array: [5,6,7,8,9,4], expectedIndex: 4}
    ];

    _.forEach(tests, function (test) {
      index = finder.find(test.array);
      expect(index).to.equal(test.expectedIndex);
    });
  });
});
