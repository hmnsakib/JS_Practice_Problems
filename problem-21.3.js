function findOddSum(numbers) {
    // find odd numbers
    let oddNum = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num % 2 === 1) {
            oddNum.push(num);
        }
    }

    // sum of odd numbers
    let sum = 0;
    for (let i = 0; i < oddNum.length; i++) {
        let num = oddNum[i];
        sum = sum + num;
    }

    return sum;
}

let arrayOfNum = [5, 7, 8, 10, 45, 30];
console.log(findOddSum(arrayOfNum));
