//함수로 구구단 실행하기//

// 학습 목표
// 함수를 활용해 구구단을 구현하는 경험을 한다.
// 요구사항
// 함수를 활용해 반복적으로 발생하는 코드를 줄인다.
// 공부를 위해 메인함수를 사용해 본다.
// 결과물
// 개선된 구구단 프로그램
// github 저장소
// 힌트
// 구구단 계산 결과를 배열에 담는 로직을 새로운 함수로 분리한다.
// 배열에 담은 데이터를 화면에 출력하는 로직을 새로운 함수로 분리한다.

function allDan() {
    for (let n = 2; n <= 9; n++) {
        let result = calculateGugudan(n);
        gugudanWriteDown(n, result);
    }
}
allDan();

function calculateGugudan(danNumber) {
    let result = [];
    for (let i = 1; i <= 9; i++) {
        result[i] = danNumber * i;
    }
    return result;
}
function gugudanWriteDown(danNumber, resultArr) {
    console.log(danNumber + "단")
    resultArr.forEach(function (result, index) {
        console.log(danNumber + "*" + index + "=" + result)
    })
}