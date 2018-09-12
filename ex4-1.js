// function printResult(x, ret) {
//     document.write("<h2>" + x + "단</h2>")
//     for (var i = 1; i <= 9; i++) {
//         document.write(x + "*" + i + "=" + ret[i])
//     }
// }

function printResult(x, ret) {
    document.write("<h2>" + x + "단</h2>")
    ret.forEach(function(result, index){
        if(index === 0) return
        document.write(x + "*" + index + "=" + result)
    })
}
        // for (var i = 1; i <= 9; i++) {
        //     document.write(x + "*" + i + "=" + ret[i])
        // }