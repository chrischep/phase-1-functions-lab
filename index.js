
function distanceFromHqInBlocks(someValue) {
return Math.abs(42-someValue);
  }

  function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue)*264; 
  
  }

  function distanceTravelledInFeet(someValue, convFeet) {
    return Math.abs((convFeet-someValue)*264);
}

  function calculatesFarePrice(someValue, convFeet) {
    const x=distanceTravelledInFeet(someValue,convFeet);
    if (x < 400){
      return 0;
    }
    else if(x > 400 && x <= 2000)
    {
      return  0.02*(x-400);
    }
    else if(x >2000 && x <2500 ){
      return 25;
    }
    else{
        return"cannot travel that far"

    }
  }
