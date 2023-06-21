//-----problem 2-----
//this is a function of odd and even. which will accept a string as input and count its number of characters.
//then show the counted number odd or even.

function evenOdd(myString) {
    if (typeof myString !== "string") {
        return "Please enter a string";
    } else {
        let count = 0;

        for (let i = 0; i < myString.length; i++) {
            count++;
        }

        if (count % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }
}

console.log(evenOdd("Phero"));
