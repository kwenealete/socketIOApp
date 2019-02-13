let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'monya';
        let text = 'Some message';
        let message = generateMessage(from, text);
       expect(message.createdAt).toBeA('number');
       expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Alete';
        let latitiude = 1;
        let longitude = 1;
        let url = 'http://www.google.com/maps?q=1,1';
        let myLocation = generateLocationMessage(from, latitiude, longitude);
        expect(myLocation.createdAt).toBeA('number');
        expect(myLocation).toInclude({from, url});
    });
})