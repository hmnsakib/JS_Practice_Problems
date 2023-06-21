var score = [85, 66, 95, 56, 40];
var grad;
var studentName = ["Sakib", "Tom", "Jane", "Peter", "Jhon"];

for (let index = 0; index < score.length; index++) {
    // grad check
    if (score[index] >= 0 && score[index] <= 100) {
        if (score[index] >= 80) {
            grad = "A";
        } else if (score[index] >= 60) {
            grad = "B";
        } else if (score[index] >= 50) {
            grad = "C";
        } else if (score[index] >= 40) {
            grad = "D";
        } else {
            grad = "F";
        }
    } else {
        console.log("Invalid score!");
    }

    //output
    console.log(studentName[index] + "'s grad is : " + grad);
}
