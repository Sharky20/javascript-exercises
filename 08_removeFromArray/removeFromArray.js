const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) {
        while (arr.indexOf(arguments[i]) != -1) {
            arr.splice(arr.indexOf(arguments[i]), 1);
        }   
    }
     
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
