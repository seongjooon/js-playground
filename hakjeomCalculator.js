//학점계산기
let data = [
    { 'name': '데이터베이스', 'grade': 'A+', 'credit': 2, 'major': false },
    { 'name': '딥러닝', 'grade': 'A', 'credit': 1, 'major': true },
    { 'name': '인공지능', 'grade': 'A', 'credit': 3, 'major': false },
    { 'name': '교양영어', 'grade': 'B+', 'credit': 2, 'major': true },
    { 'name': '철학', 'grade': 'B+', 'credit': 1, 'major': false }
];
// 학점 기준에 따라 변경
let gradeTable = { 'A+': 4.5, 'A': 4, 'B+': 3.5, 'B': 3, 'C+': 2.5, 'C': 2, 'D+': 1.5, 'D': 1, 'F': 0 }
//전체 이수학점 하나씩 받은 배열
function gradePush(data, gradeTable) {
    let wholeGrade = [];
    for (i = 0; i < data.length; i++) {
        var str = data[i]['grade'];
        wholeGrade.push(gradeTable[str]);
    }
    return wholeGrade;
}
let wholeGrade = gradePush(data, gradeTable)
console.log(gradePush(data, gradeTable))
// 전공학점 하나씩 받은 배열
function majorGradePush(data, gradeTable) {
    let majorGrade = [];
    for (i = 0; i < data.length; i++) {
        var str = data[i]['grade'];
        if (data[i]['major']) majorGrade.push(gradeTable[str]);
    }
    return majorGrade;
}
let majorGrade = majorGradePush(data, gradeTable)
console.log(majorGradePush(data, gradeTable))
//이수학점 배열
function creditPush(data) {
    let creditArray = [];
    for (i = 0; i < data.length; i++) {
        let creditValue = data[i]['credit'];
        creditArray.push(creditValue)
    }
    return creditArray;
}
let creditArray = creditPush(data);
console.log(creditArray)
//전공이수학점 배열
function majorCreditPush(data) {
    let majorCreditArray = [];
    for (i = 0; i < data.length; i++) {
        let majorcreditValue = data[i]['credit'];
        if (data[i]['major']) majorCreditArray.push(majorcreditValue)
    }
    return majorCreditArray;
}
let majorCreditArray = majorCreditPush(data);
console.log(majorCreditArray)
// 평균값 구해주는 함수
function gradeAverageCalculator(numberArray) {
    let numberSum = numberArray.reduce((acc, cur, i) => {
        return acc + cur;
    }, 0)
    console.log(numberSum)
    let numberAverage = numberSum / numberArray.length
    console.log(numberAverage)
    return numberAverage;
}
// 합계 함수
function creditSum(numberArray) {
    let numberSum = numberArray.reduce((acc, cur, i) => {
        return acc + cur;
    }, 0)
    console.log(numberSum)
    return numberSum
}

//main 함수
function showGrade() {
    let wholeGradeAverage = gradeAverageCalculator(wholeGrade);
    let majorGradeAverage = gradeAverageCalculator(majorGrade)
    let wholeCreditSum = creditSum(creditArray)
    let majorCreditSum = creditSum(majorCreditArray)
    let gradeWritedown = `[4.5기준] 총평점 : ${wholeGradeAverage}, 전공평점 : ${majorGradeAverage}, 이수학점 : ${wholeCreditSum}, 전공이수학점 : ${majorCreditSum}`
    return gradeWritedown
}
console.log(showGrade());