const removeFromArray = function(arr, ...theArgs) {

    console.log(arr);
    console.log(theArgs);

    for(const i of theArgs){
        if (arr.includes(i)){
            index = arr.indexOf(i);
            arr.splice(index,1)
        }
    }
    console.log(arr);
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
