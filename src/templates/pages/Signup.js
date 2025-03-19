import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from "../component/Header";

import '../../static/css/common/reset.css';
import '../../static/css/login.css';

const SignUp = () => {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }

        const newUser = {
            id: Id,
            password: Password,
            email: Email,
        };

        console.log('회원가입 요청:', newUser);

        // 서버에 회원가입 요청 로직 (백엔드 API 연동)
        // try {
        //     const response = await fetch('/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(newUser),
        //     });

        //     if (response.ok) {
        //         console.log('회원가입 성공');
        //         setSuccess("회원가입이 완료되었습니다.");
        //         setError("");
        //         navigate('/login');
        //     } else {
        //         console.log('회원가입 실패');
        //         setError("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
        //     }
        // } catch (err) {
        //     console.error("회원가입 중 에러 발생", err);
        //     setError("서버와의 통신에 문제가 발생했습니다.");
        // }

        setSuccess("회원가입이 완료되었습니다.");
        setError("");
        navigate('/login');
    };

    return (
        <div id="wrap">

            <Header />

            <h2 className='login-title'>회원가입</h2>

            <form className='login-form' onSubmit={onSubmitHandler}>
                <label className='login-label'>Id</label>
                <input
                    className='login-text'
                    type="text"
                    value={Id}
                    onChange={onIdHandler}
                    required
                    placeholder="아이디를 입력하세요"
                />

                <label className='login-label'>Password</label>
                <input
                    className='login-text'
                    type="password"
                    value={Password}
                    onChange={onPasswordHandler}
                    required
                    placeholder="비밀번호를 입력하세요"
                />

                <label className='login-label'>Confirm Password</label>
                <input
                    className='login-text'
                    type="password"
                    value={ConfirmPassword}
                    onChange={onConfirmPasswordHandler}
                    required
                    placeholder="비밀번호를 다시 입력하세요"
                />

                <label className='login-label'>Email</label>
                <input
                    className='login-text'
                    type="email"
                    value={Email}
                    onChange={onEmailHandler}
                    required
                    placeholder="이메일을 입력하세요"
                />

                <button className='login-btn' type="submit">회원가입</button>
                <Link to='/login' className='auth-btn'>이미 회원이세요? 로그인!</Link>
            </form>
        </div>
    );
};

export default SignUp;