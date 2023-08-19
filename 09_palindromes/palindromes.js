const palindromes = function (str) {

    const lowerCase = str.toLowerCase();
    temp = lowerCase.match(/[a-z0-9]/g);
    alpha = temp.join();


    snd = temp.reverse().join();
    
    if (alpha===snd){
        return true;
    }
    else{
        return false;
    }


    

};

// Do not edit below this line
module.exports = palindromes;
