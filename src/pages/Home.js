import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { SectionsContainer, Section } from 'react-fullpage';

// import $ from 'jquery';

import '../fullpage/jquery.fullPage';
import '../css/reset.css';
import '../css/main.css';
import scrollDown from '../images/scrollDown.jpg';

const Home = () => {

    let options = {
        activeClass:'active', // the class that is appended to the sections links
        anchors:['sectionOne', 'sectionTwo','sectionThree'], // the anchors for each sections
        //arrowNavigation:true, // use arrow keys
        className:'SectionContainer', // the class name for the section container
        delay:1500, // the scroll animation speed
        //navigation:true, // use dots navigatio
        scrollBar:false, // use the browser default scrollbar
        verticalAlign:false // align the content of each section vertical
      };

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
                    <li><Link to = "/jboard">게시판 &lt;Jboard&gt;</Link></li>
                    <li><a href="#">실시간 채팅</a></li>
                </ul>
            </div>
        </header>

        {/* body */}
        <SectionsContainer {...options}>
            <Section className='section'>
                <div className="dashBoard">
                    <p className="koreanIntro">
                        <a className="hello">안녕하세요.</a>제 이름은 <a className="hello">김재혁!</a><br/>
                        <a className="highlight type1">훗날</a> 개발자하면 <a className="highlight type2">모두가</a> 인정할<br/>
                        백 개발이 가능한<a class="highlight type3"> 프론트엔드 개발자</a>입니다.
                    </p>
                    <p className="englishIntro">
                        Hello Company!<br/>
                        I'm Jae Hyeok Kim!
                        I want to be the best in the IT industry.<br/>
                        Also, making web pages is so much fun! Coding is fun, too.<br/>
                        Have a nice day^^
                    </p>
                </div>
                <div class="scroll">
                    <img src={scrollDown} alt="scrollDown"/>
                </div>
            </Section>
            <Section className='section'>
                <h2>project <em>[ 아래 항목을 클릭해주세요 ]</em></h2>
                <ul className="projectBox">
                    <li className="project">
                    <h3>Work PROJECT</h3>
                    <p>
                        ☆ 1 <br/>
                        신한은행 통합단말 차세대프로젝트 <br/>
                        [2022-02 ~ 2022-10]<br/>
                        - 업무명 : 화면로직개발<br/>
                        - 사용 언어 : Javascript, Java <br/>
                    </p>
                    <br/>
                    <p>
                        ☆ 2 <br/>
                        LX플랫폼 고도화 프로젝트<br/>
                        [2023-11 ~ 2024-01]<br/>
                        - 업무명 : 플랫폼 2D 환경 고도화 <br/>
                        - 사용 언어 : Java(Spring) <br/>
                    </p>
                    </li>
                    <li className="education">
                    <h3>My Project</h3>
                    <p><a href="./index.html"> 1. JStory 고도화 프로젝트</a></p>
                    <p><a href="./project/bicycle/index.html"> 2. 국토종주 이야기 : 633km 국토종주 이야기 (OpenLayers)</a></p>
                    <p><a href="./project/jboard-lv4/assets/index.html"> 3. Jboard : 게시판 CRUD</a></p>
                    <p><a href="./project/todo/index.html">4. Jstory ASIS</a></p>
                    <p><a href="./project/">5. coding Test 준비..!  </a></p>
                    <p><a href="./project/manboWalk/index.html">6. team.Nivea를 소개합니다 - Python 사용  </a></p>
                    <p><a href="./project/manboWalk/index.html">7. ChiolGram - Node.js 최종 프로젝트</a></p>
                    <p><a href="./project/game-1/index.html">8. 내가 만든 (뼈만 있는) 첫 번째 게임 : 장애물 피하기</a></p>
                    <p><a href="./project/game-2/index.html">9. 내가 만든 두 번째 게임 : 사무라이를 죽여라</a></p>
                    <p><a href="./project/game-3/index.html">10. 내가 만든 세 번째 게임 : 스네이크 게임</a></p>
                    </li>
                </ul>
            </Section>
            <Section className="section">
                <div class="lifeGraph">
                    <div class="shortView">
                        <h4>나의 개발 경력 [2021 ~ 2024]</h4>
                        <dl>
                            <dt>2024년</dt>
                            <dd><strong>Jstory 고도화 프로젝트 (React.js 적용 중) </strong><em>2024년01월20일 ~ ing</em></dd>
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
                            <dd><strong>21년12월31일 : 웹콘텐츠 UI/UX 디자인 & 프론트엔드 수료</strong><em>이젠 아카데미 강남점</em></dd>
                            <dd><strong>21년07월09일 : Java Enterprise Developer 양성과정 수료</strong><em>강남대학교 산학협력단</em></dd>
                        </dl>
                    </div>
                </div>
            </Section>
        </SectionsContainer>

        {/* footer */}
        <footer id="footer">
            <p>Made By FE.KimJaeHyeok</p>
        </footer>


        <div class='box'>
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>
        </div>
        </>
    );
};

export default Home;