var expect = require('expect');
const {isRealString} = require('./../utils/validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 1;

        var result = isRealString(str);

        expect(result).toBe(false);
    });

    it('should reject string with only space', () => {
        var str = '   ';

        var result = isRealString(str);

        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var str = 'teste';

        var result = isRealString(str);

        expect(result).toBe(true);
    });
});