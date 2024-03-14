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
            <p id="skipNav" className="hide"><a href="./index.html">본문 바로가기</a></p>

            {/* header */}
            <header id="header">
                <div className="menu menuIcon" onClick={ hamburgerMenu }>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <h1><Link to = "/" >Jstory</Link></h1>

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
                    <li><Link to = "/jboard">게시판</Link></li>
                    <li><a href="#">실시간 채팅</a></li>
                </ul>
                </div>
            </header>

            {/* subVisual */}
            <section className="subVisual" id="subVisual">
                <div className="inner">
                    <h2>PROFILE</h2>
                </div>
            </section>

            {/* main */}
            <section className="main">
                <div className="profile intro">
                    <div className="txtWrap">
                        <h2>About ME</h2>
                        <img src={me} alt="나자신"/>
                        <p>"기획, 디자인, 개발까지 다하는 인간 스타트업이 되기 위해서 노력 중에 있습니다. <br/>
                        비록 행정, 법, 경영학을 전공하였으나, 졸업 이후 약 5년 간 컴공공부를 따로 하였으며<br/>
                        SI 개발자가 되었고 젊은 나이에 대규모 프로젝트를 경험하였습니다.<br/>
                        Node.js가 제 주력 언어이며 React.js도 사용가능합니다.<br/>
                        <br/>
                        무엇이든 시작하면 제대로 하는 성격의 소유자, 김재혁!<br/>
                        함께 즐겁고 열정적으로 무언가를 만들 준비가 되어 있습니다!!"</p>
                    </div>
                </div>

                <div className="profile addi">
                    <div className="inner">
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

                <div className="line"></div>

                <div className="profile lifeGraph">
                    <div class="lifeGraph">
                        <div class="shortView">
                            <h4>개발 Story [2021 ~ 2024]</h4>
                            <dl>
                                <dt>2024년</dt>
                                <dd><strong>Jstory 고도화 프로젝트 (React.js 적용 중) </strong><em>2024년01월20일 ~ ing</em></dd>
                                <dd><strong>정보처리기사 공부 중 (2회 필기/실기 응시 예정) </strong><em>필기 시험일 : 5월</em></dd>
                                <dd><strong>SI (주)제타럭스시스템 계약종료 퇴사 </strong><em>2024년01월29일</em></dd>
                            </dl>
                            <dl>
                                <dt>2023년</dt>
                                <dd><strong>LX플랫폼 고도화 프로젝트 (2D 고도화) </strong><em>2023년11월6일 ~ 2024년01월26일</em></dd>
                                <dd><strong>SI (주)제타럭스시스템 입사 </strong><em>2023년10월30일</em></dd>
                                <dd><strong>스파르타코딩클럽 커리어톤 (취업지원 프로그램) </strong><em>2022년10월01일 ~ 2022년 11월</em></dd>
                                <dd><strong>스파르타코딩클럽 Node.js 백엔드 과정 수료</strong><em>2023년05월 ~ 2022년09월</em></dd>
                                <dd><strong>SI (주)지아이데이타 퇴사 </strong><em>2023년5월</em></dd>
                            </dl>
                            <dl>
                                <dt>2022년</dt>
                                <dd><strong>신한은행 통합단말 차세대프로젝트 [전환개발]</strong><em>2022년02월03일 ~ 2022년10월01일</em></dd>
                                <dd><strong>SI (주)지아이데이타 입사 </strong><em>2022년1월</em></dd>
                            </dl>
                            <dl>
                                <dt>2021년</dt>
                                <dd><strong>21년12월31일 :      웹콘텐츠 UI/UX 디자인 & 프론트엔드 수료</strong><em>이젠 아카데미 강남점</em></dd>
                                <dd><strong>21년07월09일 : Java Enterprise Developer 양성과정 수료</strong><em>강남대학교 산학협력단</em></dd>
                            </dl>
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