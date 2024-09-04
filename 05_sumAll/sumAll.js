const sumAll = function(num1, num2) {
    finalSum = 0

    if ((num1 > 0 && num2 > 0) && (Number.isInteger(num1) && Number.isInteger(num2))) {
        if (num2 > num1) {
            for (let i = num1; i <= num2; i++) {
                finalSum += i
            };
        } 
        
        if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                finalSum += i
            };
        }
    } else {
        return 'ERROR'
    };

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
