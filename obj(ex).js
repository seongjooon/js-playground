let numbers = [{
    "name": "Yong",
    "type": "sk",
    "childnode": [{
        "name": "echo",
        "type": "sk",
        "childnode": [{
            "name": "cong",
            "type": "sk",
            "childnode": []
        }]
    }]
},
{
    "name": "hong",
    "type": "sk",
    "childnode": [{
        "name": "mong",
        "type": "sk",
        "childnode": []
    }]
}]

let array = [];

function findSk(numbers) {
    console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]["type"] === "sk") {
            array.push(numbers[i]["name"])
        console.log(numbers[i]["childnode"])
        }
    }
}

findSk(numbers)
console.log(array)
