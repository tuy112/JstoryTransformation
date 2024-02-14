import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import '../css/reset.css';
import '../css/sub.css';
import me from '../images/about_man.png';

const Profile = () => {
    // 1. 햄버거 메뉴 구현
    function hamburgerMenu() {
        const menu = document.querySelector(".menu");
        const navBar = document.querySelector("#navBar");

        menu.classList.toggle("active");
        if (navBar.style.display === "none" || navBar.style.display === "") {
            navBar.style.display = "block";
        } else {
            navBar.style.display = "none";
        }
    };

    useEffect(() => { 
        hamburgerMenu();
        console.log('Jstory에 오신 것을 환영합니다!');
    }, []);

    return (
        <>
            {/* 본문 바로가기 */}
            <p id="skipNav" class="hide"><a href="./index.html">본문 바로가기</a></p>

            {/* header */}
            <header id="header">
                <div className="menu menuIcon" onClick={ hamburgerMenu }>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <h1><a href="#">Jstory</a></h1>

                <div className="navBar" id="navBar">
                <ul className="gnb">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/profile">Profile</Link></li>
                    <li><Link to = "/project">Project</Link></li>
                    <li><Link to = "/bikeTour">633KM 자전거국종이야기</Link></li>
                    <li><a href="https://jelly-troodon-4ff.notion.site/JH_Recorder-2024-ac2bd8b5635940fe82c9d95fd2886ee2?pvs=4">JH Notion Recorder</a></li>
                    <li><a href="https://jh-healing-place.tistory.com/">Jstol Blog</a></li>
                    <li><a href="#">JGAME</a></li>
                </ul>

                <ul className="jboard">
                    <li><a href="#">게시판</a></li>
                    <li><a href="#">실시간 채팅</a></li>
                </ul>
                </div>
            </header>

            {/* subVisual */}
            <section className="subVisual" id="subVisual">
                <div class="inner">
                    <h2>PROFILE</h2>
                </div>
            </section>

            {/* main */}
            <section className="main">
                <div class="profile intro">
                    <div class="inner">
                        
                        <div class="txtWrap">
                            <h2>About ME</h2>
                            <img src={me} alt="나자신"/>
                            <p>"기획, 디자인, 개발까지 다하는 인간 스타트업이 되기 위해서 노력중에 있습니다. <br/>
                            비록 행정, 법, 경영학을 전공하였으나, 졸업 이후 컴공공부를 따로 하였으며<br/>
                            SI 개발자가 되었고 젊은 나이에 대규모 프로젝트를 경험하였습니다.<br/>
                            Node.js가 제 주력 언어이며 React.js도 사용가능합니다.<br/>
                            <br/>
                            무엇이든 시작하면 제대로 하는 성격의 소유자, 김재혁!<br/>
                            함께 즐겁고 열정적으로 무언가를 만들 준비가 되어 있습니다!!"</p>
                        </div>
                    </div>
                </div>

                <div class="profile addi">
                    <div class="inner">
                        <div>
                            <h2>Capability</h2>
                            <p>Node.js &#40;Express.js, Nest.js&#41; </p>
                            <p>Publishing with html, CSS, JS </p>
                            <p>Connecting DB (using MySQL, Oracle) </p>
                            <p>Using Eclipse, Websquare5, Nexacro (Java, JSP.. etc) </p>
                            <p>UX Research / UI Prototyping </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer id="footer">
                <p>Made By FE.KimJaeHyeok</p>
            </footer>
        </>
    );
}

export default Profile;