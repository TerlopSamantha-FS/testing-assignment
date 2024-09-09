//Requirements
// TDD - create test for a module that will:
// obscure credit card number excpt the last 4 digits
// Test make sure the function obscures credit card numbers that are between the length of 12-16 digits


const assert = require('assert');
const { obscureCreditCard } = require('../creditCardUtils');

describe('Credit Card Obfuscation', function() {
    it('should obscure a valid 12-digit credit card number', function() {
        const result = obscureCreditCard("123456789012");
        console.log(result); // Logs: ********9012
        assert.strictEqual(result, '********9012');
    });

    it('should obscure a valid 16-digit credit card number', function() {
        const result = obscureCreditCard("1234567890123456");
        console.log(result); // Logs: ************3456
        assert.strictEqual(result, '************3456');
    });

    it('should obscure a valid 14-digit credit card number', function() {
        const result = obscureCreditCard("12345678901234");
        console.log(result); // Logs: **********1234
        assert.strictEqual(result, '**********1234');
    });

    it('should return "Invalid Credit Card" for a number less than 12 digits', function() {
        const result = obscureCreditCard("1234567");
        console.log(result); // Logs: Invalid Credit Card
        assert.strictEqual(result, 'Invalid Credit Card');
    });

    it('should return "Invalid Credit Card" for a number more than 16 digits', function() {
        const result = obscureCreditCard("123456789012345678");
        console.log(result); // Logs: Invalid Credit Card
        assert.strictEqual(result, 'Invalid Credit Card');
    });
});
