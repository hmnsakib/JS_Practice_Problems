//-----problem 4-----
//this is a function of finding bad data as negative numbers. which will accept an array of numbers as input.
//then it counts how many negative numbers are there as bad data.
//then return the number of bad data.

function findingBadData(myArray) {
    if (Array.isArray(myArray) !== true) {
        return "Please enter a array of number";
    } else {
        let badData = 0;

        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] < 0) {
                badData++;
            }
        }

        return badData;
    }
}

console.log(findingBadData([-4, -9, -5, -33, -55]));
