//-----problem 5-----
//this is a function of Converting gems into diamonds. which will accept 3 numbers as input as gems.
//that it multiplies gems by the power of each gem to convert diamonds, which is 21, 32, 43;
//then add all 3 as total diamonds.
//than checks if it is greater 2*1000 than return total diamond-2000.
//else return the total diamond.

function gemsToDiamond(num1, num2, num3) {
    if (typeof num1 !== "number" && num2 !== "number" && num3 !== "number") {
        return "Please enter all 3 numbers";
    } else {
        const firstGemsPower = 21;
        const secondGemsPower = 32;
        const thirdGemsPower = 43;

        const firstDiamond = firstGemsPower * num1;
        const secondDiamond = secondGemsPower * num2;
        const thirdDiamond = thirdGemsPower * num3;

        const totalDiamond = firstDiamond + secondDiamond + thirdDiamond;

        if (totalDiamond > 2000) {
            return totalDiamond - 2000;
        } else {
            return totalDiamond;
        }
    }
}

console.log(gemsToDiamond(100, 5, 1));
