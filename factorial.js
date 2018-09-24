// Factorial 구현하기

// function numFac(number) {
//     let sum = 1;
//     for (let i = 1; i <= number; i++) {
//         sum *= i;
//     }
//     return sum;
// }
// console.log(numFac(10));


var numFac = function (number) {
    num1 += number*(number-1)

    if (number = 0) {
        return;
    }
    numFac(number - 1);
}
console.log(numFac(5));