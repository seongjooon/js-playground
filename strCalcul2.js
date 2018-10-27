//문자열 계산기
function getExpression() {
    let expression = prompt("식을 적어보세요");
    return expression;
}

function calculateFirstExpression(expression) {
    let result;
    if (expression.includes("+")) {
        let [first, second] = expression.split("+")
        result = first * 1 + second * 1
    }
    if (expression.includes("-")) {
        let [first, second] = expression.split("-")
        result = first * 1 - second * 1
    }
    if (expression.includes("*")) {
        let [first, second] = expression.split("*")
        result = first * 1 * second * 1
    }
    if (expression.includes("/")) {
        let [first, second] = expression.split("/")
        result = first * 1 / second * 1
    }
    return result;
}

function getSecondExpression(result) {
    let sndInputStr = prompt(`${result}에 이어서 연산해 임마`);
    return sndInputStr;
}

function calculateSecondExpression(result) {
    let sndResult = result;
    while (true) {
        let sndInputStr = getSecondExpression(sndResult);
        if (sndInputStr.includes("+")) {
            let [, number] = sndInputStr.split("+")
            sndResult += number * 1
        }
        if (sndInputStr.includes("-")) {
            let [, number] = sndInputStr.split("-")
            sndResult -= number * 1
        }
        if (sndInputStr.includes("*")) {
            let [, number] = sndInputStr.split("*")
            sndResult *= number * 1
        }
        if (sndInputStr.includes("/")) {
            let [, number] = sndInputStr.split("/")
            sndResult /= number * 1
        }
        if (sndInputStr.includes("q")) {
            printResult(sndResult)
            break;
        }
    }
    return sndResult;
}

function printResult(sndResult) {
    alert(`이게 결과야 임마 ${sndResult}`)
}

function main() {
    let expression = getExpression();
    let result = calculateFirstExpression(expression);
    calculateSecondExpression(result);
}
main();