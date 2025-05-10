const sumAll = function(start, end) {
    if (start < 0 || end < 0 || Math.floor(start) != start || Math.floor(end) != end) {
        return "ERROR";
    }
    if (typeof start != 'number' || typeof end != 'number') {
        return "ERROR";
    }

    let sum = 0;
    let low = Math.min(start, end);
    let high = Math.max(start, end);
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
