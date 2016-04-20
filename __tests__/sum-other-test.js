jest.unmock('../sumOther');

describe('sumOther', function() {
	it('adds 1 + 2 to equal 3', () => {
    const sumOther = require('../sumOther');
    expect(sumOther(1, 2)).toBe(3);
  });

});