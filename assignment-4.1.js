//-----problem 1-----
//this is a function of mind Game. which will accept a positive number as input, then multiply it by 3, then add 10, then divide by 2, then subtract 5.
//then it will return the output.

function mindGame(num) {
    let result = 0;

    if (num < 0 || typeof num !== "number") {
        return "Please enter a positive number";
    } else {
        result = num * 3;
        result = result + 10;
        result = result / 2;
        result = result - 5;

        return result;
    }
}

console.log(mindGame(5));
