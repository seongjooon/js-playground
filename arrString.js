// 핸드폰 번호 가리기

const strNum = '입력하세요'

function solution(strNum) {
    const num = strNum.split('')
    let newArr = [];
    newArr = num.slice(-4)
    for (let i = 0; i < num.length - 4; i++) {
        newArr.unshift('*')
    }
    return newArr.reduce((arr, arr2) => arr + arr2)
}
console.log(solution(strNum))


//정규식을 활용한 답
const hide_numbers = (s) => s.replace(/\d(?=\d{4})/g, "*");
console.log(hide_numbers(strNum))