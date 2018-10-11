function removeLecture(allSubject) {
    const newData = []
    for(let i = 0; i < allSubject.length; i++) {
        if(allSubject[i].name !== '철학') {
            newData.push(allSubject[i])
        }
    }
    return newData
}

function removeLecture(allSubject) {
    const newData = []
    allSubject.forEach((subject) => {
        if (subject.name !== '철학') {
            newData.push(subject)
        }
    });
    return newData
}

function removeLecture(allsubject) {
    return allsubject.filter(subject => subject.name !== '철학')
}

const removeLecture = (allsubject) => allsubject.filter(subject => subject.name !== '철학')