var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Carlos', 'Hey you!');

        expect(message.from).toBe('Carlos');
        expect(message.text).toBe('Hey you!');
        expect(typeof message.createAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Carlos';
        var latitude = '1';
        var longitude = '1'; 

        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(`https://www.google.com.br/maps?q=${latitude},${longitude}`);
        expect(typeof locationMessage.createAt).toBe('number');
    });
});