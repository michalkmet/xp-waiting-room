const waitingRoom = require('./waitingRoom');

// describe('Story1', () => {
//   it('UAT1.1 When given [], it should throw an exception', () => {
//     expect(() => waitingRoom([])).toThrow();
//   });
//   it('UAT1.2: When given true, it should throw an exception', () => {
//     expect(() => waitingRoom(true)).toThrow();
//   });
//   it('UAT1.3: When given 0, it should throw an exception', () => {
//     expect(() => waitingRoom(0)).toThrow();
//   });
//   it('UAT1.4: When given 1, it should throw an exception', () => {
//     expect(() => waitingRoom(1)).toThrow();
//   });
// });

describe('Story2', () => {
  // it('UAT2.1: When user pass 2, it should return 2', () => {
  //   expect(waitingRoom(2)).toBe(2);
  // });
  // it('UAT2.2: When user pass 3, it should return 2', () => {
  //   expect(waitingRoom(3)).toBe(2);
  // });
  it('UAT2.3: When user pass 4, it should return 3', () => {
    expect(waitingRoom(4)).toBe(3);
  });
  // it('UAT2.4: When user pass 5, it should return 4', () => {
  //   expect(waitingRoom(5)).toBe(4);
  // });
});
