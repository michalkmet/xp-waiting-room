const waitingRoom = require('./waitingRoom');

describe('Story1', () => {
  it('When given [], it should throw an exception', () => {
    expect(() => waitingRoom([])).toThrow();
  });
});
