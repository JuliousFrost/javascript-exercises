const findTheOldest = function(arr) {

    var i = 0;
    l1 = [];
    l2 = [];

    for(var person in arr){
        console.log("inside disc")
        if(!arr[person].yearOfDeath){
            let date =  new Date().getFullYear();
            console.log("Does not has death")
            arr[person].yearOfDeath = date;
        }

        var age = arr[person].yearOfDeath - arr[person].yearOfBirth;
        l1[i] = age;
        l2[i] = arr[person].name;
        i++;

        console.log("🚀 ~ file: findTheOldest.js:5 ~ findTheOldest ~ l1:", l1)
        console.log("🚀 ~ file: findTheOldest.js:7 ~ findTheOldest ~ l2:", l2)

        oldAge = Math.max(...l1);
        console.log("🚀 ~ file: findTheOldest.js:24 ~ findTheOldest ~ oldAge:", oldAge)
        index = l1.indexOf(oldAge);
        console.log("🚀 ~ file: findTheOldest.js:26 ~ findTheOldest ~ index:", index)

        
        
    }
    console.log("🚀 ~ file: findTheOldest.js:33 ~ findTheOldest ~ l2:", )

    finalName = l2[index];
    console.log("🚀 ~ file: findTheOldest.js:34 ~ findTheOldest ~ finalName:", finalName)
    retThis = arr[index];
    console.log("🚀 ~ file: findTheOldest.js:36 ~ findTheOldest ~ retThis:", retThis)
   
    return retThis;




};

// Do not edit below this line
module.exports = findTheOldest;
