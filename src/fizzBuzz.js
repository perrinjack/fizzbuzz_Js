function fizzBuzz(number) { 
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return number;
  }
}

function numbersBetween(start, end) {
  var list = [];
  for (var i = start; i <= end; i++) {
    console.log(fizzBuzz(i))
    list.push(fizzBuzz(i));
  }
  return list;
}