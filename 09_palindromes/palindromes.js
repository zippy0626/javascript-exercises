const palindromes = function(string) {
    let punctuation = [" ", ",", ".", "!", "'",] 
    
    string = string // Prepare string
        .toLowerCase()
        .split('')
        .filter((char) => {
            return !(punctuation.includes(char))
        })

    let stack = []

    // Odd Length, this changes the midpoint
    if (string.length % 2 !== 0) {
        let midPointIndex = Math.floor(string.length / 2)

        for (let i = 0; i < midPointIndex; i++) {
            let currentChar = string[i]
            stack.push(currentChar)
        };

        for (let j = midPointIndex + 1; j < string.length; j++) {
            let currentChar = string[j]
            if (currentChar === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false;
            };
        };
        return stack.length === 0 // See if stack is empty, if it is, all letters matched

    } else if (string.length % 2 === 0) { // Even
        let rightMidPointIndex = string.length / 2
        let leftMidPointIndex = rightMidPointIndex - 1

        if (string[rightMidPointIndex] !== string[leftMidPointIndex]) {
            return false;
        } else {
            for (let i = 0; i < leftMidPointIndex; i++) {
                let currentChar = string[i]
                stack.push(currentChar)
            };

            for (let j = rightMidPointIndex + 1; j < string.length; j++) {
                let currentChar = string[j]
                if (currentChar === stack[stack.length - 1]) {
                    stack.pop()
                } else {
                    return false;
                };
            };
            return stack.length === 0
        } 
    } 
};

// Do not edit below this line
module.exports = palindromes;
