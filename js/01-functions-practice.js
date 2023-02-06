//STEP 1
function halfOf(num) {
  var half = num / 2;
  console.log('Half of ' + num + ' is ' +  half);
  return half;
}

//STEP 2
function squareNumber(num) {
  var squaredNumber = num * num;
  console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
  return squaredNumber;
}
//STEP 3
function percentOf(num1, num2) {
  var percent = (num1/num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}

//STEP 4
function findModulus(num1, num2) {
  var res = num1 % num2;
  console.log(res + ' is the modulus of ' + num1 + ' and ' + num2);
  return res;
}
