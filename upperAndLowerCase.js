//문장 파악
const userString = 'Lord, You come to me.';
const upperCaseStr = userString.toUpperCase();
const lowerCaseStr = userString.toLowerCase();

if (userString === upperCaseStr) console.log(`${userString}은 대문자 문장입니다.`)
if (userString === lowerCaseStr) console.log(`${userString}은 소문자 문장입니다.`)
else console.log(`${userString}은 보통 문자입니다.`)