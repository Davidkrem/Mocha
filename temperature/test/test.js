let assert = require('assert');
const { describe } = require('mocha');
const { expect } = require('chai');
let convert = require('../app.js');

//Using asser we compare the ACTUAL === EXPECTED ---->  assert.equal(actual, expected);

describe('Temperature Conversion', () => {
  describe('cToF', () => {
    //Tests below
    // Faherenheit and Celsius are equal at 40 degrees below zero. Number should then remain the same.
    it('should convert -40 celsius to -40 fahrenheit', () => {
      assert.equal(-40, convert.cToF(-40));
    });
    it('should convert 0 celsius to 32 degree fahrenheit', () => {
      assert.equal(32, convert.cToF(0));
    });
    it('should return undefined if passed a non-integer', () => {
      assert.equal(undefined, convert.cToF('string'));

      it('is a function', () => {
        expect(convert.cToF).to.be.a('function');
      });
      describe('fToC', () => {
        //Tests below
        it('should convert -40 fahrenheit to -40 celsius', () => {
          assert.equal(-40, convert.fToC(-40));
        });
        it('should convert 32 fahrenheit to 0 celsius', () => {
          assert.equal(0, convert.fToC(32));
        });
        it('should return undefined if passed a non-integer', () => {
          assert.equal(undefined, convert.fToC('string'));
        });
        it('is a function', () => {
          expect(convert.fToC).to.be.a('function');
        });
      });
    });
  });
});
