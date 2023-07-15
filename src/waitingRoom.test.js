const waitingRoom = require('./waitingRoom');

describe('Story1', () => {
  it('UAT1.1 When given [], it should throw an exception', () => {
    expect(() => waitingRoom([])).toThrow();
  });
  it('UAT1.2: When given true, it should throw an exception', () => {
    expect(() => waitingRoom(true)).toThrow();
  });
  it('UAT1.3: When given 0, it should throw an exception', () => {
    expect(() => waitingRoom(0)).toThrow();
  });
  it('UAT1.4: When given 1, it should throw an exception', () => {
    expect(() => waitingRoom(1)).toThrow();
  });
});
