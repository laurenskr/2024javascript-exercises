const removeFromArray = function(inputArray, ...args) {
    let outputArray = [];
    inputArray.forEach((element) => {
        if (!args.includes(element)) {
            outputArray.push(element);
        }
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;