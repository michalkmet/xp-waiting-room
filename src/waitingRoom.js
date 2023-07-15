function waitingRoom(chairs) {

  if (typeof chairs != 'number' || chairs < 2){
    throw new Error();
  }

  console.log('chairs: ', chairs);
  //1.Find a place as far form other people as possible - check for other people
  //2.Find a place as close to exit as possible - smallest empty seat

  let chairsArr = [];

 for (let i=1;i<=chairs;i++){
  console.log('i: ', i);
  if(i===1) {
    chairsArr[0] = 1;
  }
  if(i===2){
    chairsArr[chairs-1] = 2;
  }

  if(i===3){
    console.log('Math.round(chairsArr.length / 2)', Math.round(chairsArr.length / 2));
    chairsArr[Math.round(chairsArr.length / 2) - 1] = 3;
  }

  if (i > 3){
    
  }

  console.log('chairsArr: ', chairsArr);
  if(i === chairs){
    console.log('chairsArr.indexOf(chairs): ',chairsArr.indexOf(chairs));
    return chairsArr.indexOf(chairs) + 1;
  }
  
  
   
 }

}


module.exports = waitingRoom;
