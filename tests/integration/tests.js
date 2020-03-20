const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display of the running total when the number buttons are pressed', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#number2')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('32')
  })

  it('should update the display with the result of the operation when arithmetical operations are pressed', function(){
  running_total = element(by.css('#running_total'))
       element(by.css('#number8')).click();
       element(by.css('#operator_multiply')).click();
       element(by.css('#number2')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('16')
  })

  it('should be able to chain multiple operations together', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number3')).click();
     element(by.css('#operator_add')).click();
     element(by.css('#number9')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('6')
    })

});
