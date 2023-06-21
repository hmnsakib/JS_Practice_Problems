//-----problem 3-----
//this is a function of less or greater than seven. which will accept a number as input.
//then subtract 7 from it.
//then check if the result is less than 7 or not.
//if it is less than 7, it will return the result.
//or if greater than 7, it will double the input value and return.

function isLGSeven(num) {
    let result = 0;

    if (typeof num !== "number") {
        return "Please enter a number";
    } else {
        result = num - 7;

        if (result < 7) {
            return result;
        } else {
            return num * 2;
        }
    }
}

console.log(isLGSeven(6));
