// Ans of (1)

var num = [13, 79, 45];

console.log("Ans of (1)");
console.log("Numbers : " + num);

if (num[0] > num[1] && num[0] > num[2]) {
    console.log(num[0] + " is largest number");
} else if (num[1] > num[0] && num[1] > num[2]) {
    console.log(num[1] + " is largest number");
} else {
    console.log(num[2] + " is largest number");
}

// Ans of (2)

var sides = [9, 8, 9];

console.log("Ans of (2)");
console.log("Sides : " + sides);

if (sides[0] == sides[1] || sides[0] == sides[2] || sides[1] == sides[2]) {
    console.log("The triangel is isosceles");
} else {
    console.log("The triangel is not isosceles");
}
