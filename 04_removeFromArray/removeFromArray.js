const removeFromArray = function(arr, ...theArgs) {

    console.log(arr);

    for(const i of theArgs){
        if (arr.includes(i)){
            arr.pull(i)
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
