var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Carlos', 'Hey you!');

        expect(message.from).toBe('Carlos');
        expect(message.text).toBe('Hey you!');
        expect(typeof message.createAt).toBe('number');
    });
})