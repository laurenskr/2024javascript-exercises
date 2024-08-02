const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"
    }
    let small = start < end ? start : end;
    let big = start < end ? end : start;
    
    if (small < 0) {
        return "ERROR"
    }
    let sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
