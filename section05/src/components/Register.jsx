import { useState } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, SetName] = useState('');
    const [birth, SetBirth] = useState('');
    const [country, SetCountry] = useState('');
    const [bio, SetBio] = useState('');

    const onChangeName = (e) => {
        SetName(e.target.value);
    };
    const onChangeBirth = (e) => {
        SetBirth(e.target.value);
    };
    const onChangeCountry = (e) => {
        SetCountry(e.target.value);
    };
    const onChangeBio = (e) => {
        SetBio(e.target.value);
    };

    return (
        <>
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder={'name'}
                ></input>
                {name}
            </div>
            <div>
                <input
                    value={birth}
                    onChange={onChangeBirth}
                    type={'date'}
                ></input>
                {birth}
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
                {country}
            </div>
            <div>
                <textarea
                    value={bio}
                    onChange={onChangeBio}
                    placeholder={'introduce urself'}
                ></textarea>
                {bio}
            </div>
        </>
    );
};

export default Register;
