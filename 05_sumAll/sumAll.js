const sumAll = function(int1,int2) {
    console.log("🚀 ~ file: sumAll.js:2 ~ sumAll ~ int2:", int2)
    console.log("🚀 ~ file: sumAll.js:2 ~ sumAll ~ int1:", int1)
    let total = 0;
    console.log("🚀 ~ file: sumAll.js:5 ~ sumAll ~ total:", total)

    if(typeof(int1)!= "number" || int1 < 0 ){
        return "ERROR"
    }
    if(typeof(int2)!= "number" || int2 < 0){
        return "ERROR"
    }

    if (int1>int2){
        const temp = int1;
        int1 = int2;
        int2 = temp;
    }

    while(int1<=int2){
        total+= int1;
        int1++;
    }
    console.log("🚀 ~ file: sumAll.js:12 ~ sumAll ~ total: total");

    return total;


};

// Do not edit below this line
module.exports = sumAll;
