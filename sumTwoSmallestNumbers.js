function sumTwoSmallestNumbers(numbers) {  
  //Code here
  var small = numbers[0];
  for(var i=0; i<=numbers.length; i++){
    if(numbers[i] < small){
      small = numbers[i]
    }
  }
  console.log(small);
  
  var secondSmall = numbers[0];
  for(var j=1; j<=numbers.length; j++){
    if(numbers[j] != small){
      if(numbers[j] < secondSmall){
        secondSmall = numbers[j];
      }
    }
  }  
  console.log(secondSmall);
}