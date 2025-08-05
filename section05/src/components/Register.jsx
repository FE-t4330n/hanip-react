import { useState, useRef } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// let count = 0;

const Register = () => {
    const [input, setInput] = useState({
        name: '',
        birt: '',
        country: '',
        bio: '',
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    // let count = 0;

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        // count++;
        // console.log(count);
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        if (input.name === '') {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focues();
        }
    };

    return (
        <>
            <div></div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={'name'}
                ></input>
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type={'date'}
                ></input>
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                    placeholder={'introduce urself'}
                ></textarea>
            </div>
        </>
    );
};

export default Register;
