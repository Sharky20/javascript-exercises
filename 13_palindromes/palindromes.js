const palindromes = function (str) {
    let arr = str.toLowerCase().replaceAll(" ", "").split("");
    let cleanArr = [];
    arr.forEach(element => {
        if ((element >= "A" && element <= "Z") || (element >= "a" && element <= "z") || (element >= "0" && element <= "9")) {
            cleanArr.push(element);
        }
    });

    let left = 0;
    let right = cleanArr.length - 1;

    for (; left < right; left++, right--) {
        if (!(cleanArr.at(left) == cleanArr.at(right))) {
            return false;
        }
    }
    
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
