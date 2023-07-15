function waitingRoom(chairs) {
  if (typeof chairs != 'number' || chairs < 2){
    throw new Error();
  }
  if (chairs < 4){
    return 2;
  }
  return chairs - 1;
}

module.exports = waitingRoom;
