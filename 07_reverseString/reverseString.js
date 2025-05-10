const reverseString = function(str) {
    charArr = [];
    for (let i = 0; i < str.length; i++) {
        charArr[i] = str.charAt(i);
    }
    let right = str.length;
    for (let left = 0; left < right; left++, right--) {
        temp = charArr[left];
        charArr[left] = charArr[right]
        charArr[right] = temp;
    }
    return charArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
