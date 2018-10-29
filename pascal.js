let arr = [1, 1]

arr = [
    arr[0],
    arr[0] + arr[0 + 1],
    arr[arr.length - 1]
]

console.log(arr)

arr = [
    arr[0],
    arr[0] + arr[0 + 1],
    arr[0 + 1] + arr[0 + 2],
    arr[arr.length - 1]
]

console.log(arr)

arr = [
    arr[0],
    arr[0] + arr[0 + 1],
    arr[0 + 1] + arr[0 + 2],
    arr[0 + 2] + arr[0 + 3],
    arr[arr.length - 1]
]

console.log(arr)
