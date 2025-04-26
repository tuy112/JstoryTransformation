import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from "../component/Header";

const Login = () => {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // const body = {
        //     id: Id,
        //     password: Password,
        // };

        const testUser = {
            id: "abc1234",
            password: "1234"
        };

        // try {
        //     const response = await fetch("/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(body)
        //     });

        //     if (response.ok) {
        //         // 로그인 성공 시
        //         const result = await response.json();
        //         console.log("로그인 성공", result);
        //         navigate('/todo');
        //     } else {
        //         // 로그인 실패 시
        //         console.log("로그인 실패");
        //         alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        //     }
        // } catch (error) {
        //     console.error("로그인 중 에러 발생", error);
        //     alert("서버와의 통신에 문제가 발생했습니다.");
        // }
        if (Id === testUser.id && Password === testUser.password) {
            console.log('로그인 성공');
            setError("");
            navigate('/home');
        } else {
            console.log('로그인 실패:', Id, Password);
            setError("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    }

    return(
        <div id="wrap">
            <Header/>

            {/* 임시 */}
            <p className='tempoary-text'>testUser : abc1234 / pw : 1234</p>
            <h2 className='login-title'>로그인</h2>

            <form className='login-form' onSubmit={onSubmitHandler}>
                <label className='login-label'>Id : </label>
                <input
                    className='login-text'
                    type='text'
                    value={Id}
                    onChange={onIdHandler}
                    required
                    placeholder="아이디를 입력하세요"
                />

                <label className='login-label'>Password : </label>
                <input
                    className='login-text'
                    type='password'
                    value={Password}
                    onChange={onPasswordHandler}
                    required
                    placeholder="비밀번호를 입력하세요"
                />
                <button className='login-btn' type="submit">로그인</button>
                <Link to='/signup' className='auth-btn'>회원이 아니세요? 회원가입!</Link>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default Login;