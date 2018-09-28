let numbers = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [
            {
                "id": 116,
                "name": "kim",
                "phone": "444-111-0200",
                "type": "kt",
                "childnode": [{
                    "id": 1168,
                    "name": "hani",
                    "phone": "010-222-0000",
                    "type": "sk",
                    "childnode": []
                }]
            },
            {
                "id": 117,
                "name": "hong",
                "phone": "010-0000-0000",
                "type": "sk",
                "childnode": []
            }]
    }]
}]

let array = [];
let inObj = numbers[0];


let obj = Object;







function findSk(inObj) {
    for (let key in inObj) {
        console.log(key)
        console.log(inObj)
        if (inObj[key] === "sk") array.push(inObj.name);
    }
}
let repeated = findSk(inObj);



console.log(array)