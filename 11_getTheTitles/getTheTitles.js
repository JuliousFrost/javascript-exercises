const getTheTitles = function(arr) {

    l = [];
    for( var i in arr){
        l.push(arr[i].title);

    }
    console.log("🚀 ~ file: getTheTitles.js:4 ~ getTheTitles ~ l:", l)
    return l;


};

// Do not edit below this line
module.exports = getTheTitles;
