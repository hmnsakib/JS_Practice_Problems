function findLeapYear(arrayOfYears) {
    let newArray = [];
    for (let i = 0; i < arrayOfYears.length; i++) {
        let year = arrayOfYears[i];

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            newArray.push(year);
        }
    }

    return newArray;
}

let arrayOfYears = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

console.log(findLeapYear(arrayOfYears));
