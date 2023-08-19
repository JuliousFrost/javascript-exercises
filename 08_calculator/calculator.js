const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let total = 0;
  for(var i in arr){
    total = total+arr[i];
  }
  return total;

};

const multiply = function(arr) {
  let total = arr[0];
  for(var i in arr){
    total = total*arr[i];
  }
  return total/arr[0];
};

const power = function(x,y) {
  return Math.pow(x, y);
	
};

const factorial = function(num) {
  let fac = 1;
  if(num == 0 || num ==1){
    return 1;
}
else if(num>1){
  for (var i =num; i>=1; i--){
    fac = fac*i;
  }
  
}
return fac;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
