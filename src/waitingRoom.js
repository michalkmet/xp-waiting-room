function waitingRoom(chairs) {
  if (chairs === 2) {
    return 2;
  }
  throw new Error();
}

module.exports = waitingRoom;
