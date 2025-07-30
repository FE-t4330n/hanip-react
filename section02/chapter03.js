// 1. 배열 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;

// 2. 객체 구조 분해 할당
let person = {
    name: 't4330n',
    age: 27,
    hobby: 'soccer',
};

let { name, age, hobby, extra = 'hello' } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
};

func(person);
