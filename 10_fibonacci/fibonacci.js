const fibonacci = function(num) {
    l = [];
    l[0] = 1;
    l[1] = 1;
    count = 2;
    if(num<1){
        return "OOPS";
    }
    while (count<=num){
        l[count] = l[count -1] + l[count-2];
        count++;

    }
    console.log("🚀 ~ file: fibonacci.js:3 ~ fibonacci ~ l:", l)

    return l[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
