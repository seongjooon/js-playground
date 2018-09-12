//객체를 활용한 구구단//

// 학습 목표
// 객체와 메소드를 사용해서 구구단을 구현하는 경험을 한다.
// 요구사항
// main() 메소드는 프로그램을 시작하는 역할을 한다.
// 함수를 구구단 객체의 메소드로 변경한다.
// 힌트
// gugudan 이라는 객체를 생성한다.
// gugudan 객체에 앞 단계에서 작성한 함수를 메소드로 추가한다.
// 객체를 이용해서 main함수 내부를 수정한다.


let gugudan = {
    results: [],
    gugudanCalcul: function (danNumber) {
        for (let i = 1; i <= 9; i++) {
            this.results[i] = danNumber * i;
        }
    },
    gugudanWriteDown: function (danNumber) {
        console.log(danNumber + "단")
        this.results.forEach(function (result, index) {
            console.log(danNumber + "*" + index + "=" + result)
        })
    },
}

function main() {
    for (let n = 2; n <= 9; n++) {
        gugudan.gugudanCalcul(n);
        gugudan.gugudanWriteDown(n);
    }
}
main();