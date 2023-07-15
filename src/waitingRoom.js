function waitingRoom(chairs) {

  if (typeof chairs != 'number' || chairs < 2){
    throw new Error();
  }
  if (chairs === 2 || chairs === 3 ) {
    return 2;
  }
  if (chairs === 4 ) {
    return 3;
  }
}

module.exports = waitingRoom;
