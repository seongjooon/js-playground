//최대공약수 만들기

// var strNum = prompt("두 수를 띄어서 입력해봐").split(" ");
var strNum = "16 36";
var strSplitNum = strNum.split(" ");
var userNumberArr = strSplitNum.map(strNumber => parseInt(strNumber, 10));
console.log("유저넘버 배열 : " + userNum);
var primeNumberArr = [];

if (userNumberArr[0] < userNumberArr[1]) {
    for (i = 2; i <= userNumberArr[1]; i++) {
        if (userNumberArr[1] % i === 0) primeNumberArr.push(i);
    }
}

if (userNumberArr[1] < userNumberArr[0]) {
    for (i = 2; i <= userNumberArr[0]; i++) {
        if (userNumberArr[0] % i === 0) primeNumberArr.push(i);
    }
}

//첫번째 배열의 수의 약수배열
var len = primeNumberArr.length;
var commonFactorArr1 = [];
for (i = 0; i < len; i++) {
    var dividedNumber = userNumberArr[0] / primeNumberArr[i]
    if (dividedNumber !== 0) {
        commonFactorArr.push(i);
        if (dividedNumber /= primeNumberArr[i] !== 0) {
            commonFactorArr.push(i);
            if ()...
        }
    }
}
//두번째 배열의 수의 약수배열
var len = primeNumberArr.length;
var commonFactorArr2 = [];
for (i = 0; i < len; i++) {
    var dividedNumber = userNumberArr[1] / primeNumberArr[i]
    if (dividedNumber !== 0) {
        commonFactorArr.push(i);
        if (dividedNumber /= primeNumberArr[i] !== 0) {
            commonFactorArr.push(i);
            if ()...
        }
    }
}

var len1 = commonFactorArr1.length;
var len2 = commonFactorArr2.length;
var commonMeasureArr = [];
for (i = 0; i < len1; i++) {
    for (j = 0; j < len2; j++) {
        if (commonFactorArr1[i] == commonFactorArr2[j]){
            commonMeasureArr.push(commonFactorArr1[i]);
        }   
    }
}