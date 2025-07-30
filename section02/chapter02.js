// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || 'person객체가 없습니다.');

    // 근데 이렇게 하면 person.name이 falsy한 값일 경우 오류가 발생할 수 있음
    // 실제 개발할 경우 이 코드는 쓰면 안된다고 생각함
}

printName();
printName({ name: 't4330n' });
