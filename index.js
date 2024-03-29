// Code your solution in this file!
let distance=42;
let distanceinfeet;
let cost;

function distanceFromHqInBlocks(somevalue) {
  distance = Math.abs(somevalue - 42); 
  console.log(distance);
  return distance;
}

function distanceFromHqInFeet(somevalue) {
  distance = Math.abs(distanceFromHqInBlocks(somevalue) * 264); 
  console.log(distance+"dtif 1");
  return distance;
}

function distanceTravelledInFeet(start, destination) {
  distance = Math.abs((destination - start) * 264); // Calculate distance traveled in feet
  console.log(distance+"dtif 2");
  return distance;
}
//function calculatesFarePrice(start, destination) {
//    if((destination-start)<400){
//        return 0
//    }
//    else if((destination-start)>400 &&((destination-start)<=2000) ){
//        return Math.abs((destination-start-800)*0.02)    
//    }
//    else if((destination-start)>2000){
//        return 25;
//    }
//
//    return 'cannot travel that far';
//
//}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  console.log(distance+"int 1" );

    if (distance <= 400) {
   
      console.log(distance+"if 1");
      return 0;
  } else if (distance > 400 && distance < 2000) {
      
      console.log(distance+"esle 1");
      return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance <= 2500) {
      
      console.log(distance+"esle 2");
      return 25;
  } else {
    
      console.log(distance+"esle");
      return 'cannot travel that far';
  }
}

distanceFromHqInBlocks(200)
distanceFromHqInFeet(200)
distanceTravelledInFeet(100,300)
calculatesFarePrice(100,300)
