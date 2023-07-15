const waitingRoom = require('./waitingRoom');

describe('waitingRoom', () => {
  it('should return hello', () => {
    expect(waitingRoom()).toBe('hello');
  });
});
