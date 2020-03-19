var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

   it('it should be able to add one number to another to get the correct total', function(){
   calculator.previousTotal = 1
   calculator.add(4)
   assert.equal(5, calculator.runningTotal)
   })

   it('it should be able to subtract one number from another to get the correct total', function(){
   calculator.previousTotal = 7
   calculator.subtract(4)
   assert.equal(3, calculator.runningTotal)
   })

   it('it should be able to multiply one number by another to get the correct total', function(){
   calculator.previousTotal = 3
   calculator.multiply(5)
   assert.equal(15, calculator.runningTotal)
   })

   it('it should be able to divide one number by another to get the correct total', function(){
   calculator.previousTotal = 21
   calculator.divide(7)
   assert.equal(3, calculator.runningTotal)
   })

   it('it should be able to click on a series of number and take these as a new number with multiple digits', function(){
   calculator.numberClick(5)
   calculator.numberClick(6)
   assert.equal(56, calculator.runningTotal)
   })

   it('it should be able to chain together multiple operations', function(){
   calculator.previousTotal = 0
   calculator.operatorClick('+')
   calculator.numberClick(2)
   calculator.operatorClick('-')
   calculator.numberClick(1)
   calculator.operatorClick('=')
   assert.equal(1, calculator.previousTotal)
   })

   it('it should be able to clear the running total without affecting the calculation', function(){
   calculator.previousTotal = 0
   calculator.operatorClick('+')
   calculator.numberClick(2)
   calculator.operatorClick('+')
   calculator.numberClick(3)
   calculator.clearClick()
   assert.equal(2, calculator.previousTotal)
   })

});
