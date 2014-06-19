var test = require('tap').test;
var Value = require('../value');

test('Value is defined', function(t){
  t.type(Value, 'function');
  t.end();
});
// tests that Value is a function

test('Value has no enumerable properties', function(t){
  t.equal(Object.keys(Value()).length, 0);
  t.end();
});
// testing to see if Value contains an empty hash

// test('property .value is defined', function(t){
//   t.notEqual(Value({max: 1, value: Math.random()}), void 0);
//   t.end();
// });
// tests that the value is not undefined

// test('.value should be 0 by default', function(t){
//   t.equal(Value().value, 0);
//   t.end();
// });
// tests that value is 0 by default

// test('.value can be assigned on instantiation', function(t){
//   t.equal(Value({value: 2}).value, 2);
//   t.end();
// });
// tests that a value can be set immediately when the function is called

// test('.value is between 0 and 1', function(t){
//   var val = Value({max: 1, value: Math.random()});
//   t.ok(val.value <= 1, 'should create a value less than 1');
//   t.end();
// });
// tests that the value within Value is between 0 and 1

// test('setting to disallowed value throws error', function(t){
//   var val = Value({max: 1, value: Math.random()});
//   try {
//     val.value = 2;
//   } catch(e){
//     t.equal(e.message, "Error: Out of bounds");
//   }
//   t.end();
// });
// tests that a value outside the max boundary throws an error

// test('.value can be re-set within bounds', function(t){
//   var val = Value({max: 5, value: 2});
//   val.value = 4;
//   t.equal(val.value, 4);
//   t.end();
// });

// tests that the value's max boundary can be reset

// test('.value cannot be set to below minimum', function(t){
//   var val = Value({min: 5, value: 6});
//   try {
//     val.value = 4;
//   } catch(e) {
//     t.equal(e.message, "Error: Out of bounds");
//   }
//   t.end();
// });
// tests that the value cannot be below the min boundary
