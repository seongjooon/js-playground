// 학점계산기
let data = [
    { 'name': '데이터베이스', 'grade': 'A+', 'credit': 2, 'major': false },
    { 'name': '딥러닝', 'grade': 'A', 'credit': 1, 'major': true },
    { 'name': '인공지능', 'grade': 'A', 'credit': 3, 'major': false },
    { 'name': '교양영어', 'grade': 'B+', 'credit': 2, 'major': true },
    { 'name': '철학', 'grade': 'B+', 'credit': 1, 'major': false }
];

// function removeLecture(allsubject) {
//     let subjectName = allsubject['name']
//     let newSubjectArray = allsubject.filter(subject => subjectName == '철학')
//     return newSubjectArray
// }

function removeLecture(allSubject) {
    const newData = []
    allSubject.forEach((subject) => {
        if (subject.name !== '철학') {
            newData.push(subject)
        }
    });
    return newData
}

removeLecture(data)
console.log(removeLecture(data))







// setTimeout(function() {
        
//     console.log(data);  //이 메시지는 즉시 실행되지 않습니다.
// }, 2000);