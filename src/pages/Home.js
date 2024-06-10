import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { SectionsContainer, Section } from 'react-fullpage';

import '../css/reset.css';
import '../css/main.css';
import '../css/mobile.css';
import scrollDown from '../images/scrollDown.jpg';

// icon
import { IoPerson } from "react-icons/io5";
import { IoFitness } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoDesktopOutline } from "react-icons/io5";

const Home = () => {

    // 1. 풀페이지 옵션
    let options = {
        activeClass:'active', // the class that is appended to the sections links
        anchors:['sectionOne', 'sectionTwo','sectionThree','sectionFour','sectionFive'], // the anchors for each sections
        //arrowNavigation:true, // use arrow keys
        className:'SectionContainer', // the class name for the section container
        delay:2000, // the scroll animation speed
        //navigation:true, // use dots navigatio
        scrollBar:false, // use the browser default scrollbar
        verticalAlign:false // align the content of each section vertical
      };

    // 2. 햄버거 메뉴 구현
    function initializePage() {
        const navBar = document.querySelector("#navBar");
        navBar.style.display = "none"; // 페이지 로드 및 새로고침 시 navBar를 숨김
    }
    
    document.addEventListener("DOMContentLoaded", initializePage);

    function hamburgerMenu() {
        const menu = document.querySelector(".menu");
        const navBar = document.querySelector("#navBar");
        const bar = document.querySelector(".bar");

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
        <div id="wrap">
            {/* 본문 바로가기 */}
            <p id="skipNav" class="hide"><a href="./index.html">본문 바로가기</a></p>

            {/* header */}
            <header id="header">
                <div className="menu menuIcon" onClick={ hamburgerMenu }>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>0
                </div>
                <h1><Link to = "/" className="h1" >KJH Portfolio</Link><span>- Jstory</span></h1>

                <div className="navBar" id="navBar">
                    <ul className="gnb">
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/profile">Profile</Link></li>
                        <li><Link to = "/project">Project</Link></li>
                        <li><Link to = "https://github.com/tuy112/bicycleTour">633KM 자전거국종이야기</Link></li>
                        <li><Link to="https://github.com/tuy112/gisDev">BAC100기록방(GIS개발)</Link></li>
                        <li><Link to="https://jh-healing-place.tistory.com/">티스토리Blog</Link></li>
                        <li><Link to="https://github.com/tuy112/kimIntro">포트폴리오 VER.2</Link></li>
                    </ul>

                    <ul className="jboard">
                        <li><Link to = "/jboard">게시판</Link></li>
                        <li><Link to = "/three">3D공간</Link></li>
                        <li><Link to = "https://github.com/tuy112/jstolTodoList">TODOLIST</Link></li>
                        <li><Link to = "/codingRoom">코딩테스트준비</Link></li>
                    </ul>
                </div>
        </header>

            {/* body */}
            <SectionsContainer {...options}>
                <Section className='section'>
                    <div className="dashBoard">
                        <p className="koreanIntro">
                            <a className="hello">안녕하세요.</a>Java 경력이 있는 Node.js 개발자, <a className="hello">김재혁입니다!</a><br/>
                            <a className="highlight type1">Eclipse와 VScode를</a> 사용할 수 있으며 <a className="highlight type2">Git과 SVN을</a> 사용해서<br/>
                            형상관리가 가능합니다.<a class="highlight type3">  감사합니다.</a>
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
                    <h2>About Me</h2>
                    <div className="introduceBox">
                        <ul className="topBox">
                            <li>
                                <div className="detailBox">
                                    <div className="txtBox">
                                        <IoPerson size="40"/>
                                        <p>이름</p>
                                        <p>김재혁</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="detailBox">
                                    <div className="txtBox">
                                        <IoFitness size="40"/>
                                        <p>생년월일</p>
                                        <p>96.01.10</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="detailBox">
                                    <div className="txtBox">
                                        <IoLocation size="40"/>
                                        <p>주소지</p>
                                        <p>경기도 수원시 영통구 광교2동</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="bottomBox">
                            <li>
                                <div className="detailBox">
                                    <div className="txtBox">
                                        <IoCallOutline size="40"/>
                                        <p>연락처</p>
                                        <p>010-4652-9973</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="detailBox">
                                    <div className="txtBox">
                                        <IoMailOutline size="40"/>
                                        <p>이메일</p>
                                        <p>master_catch@naver.com</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="detailBox">
                                    <div className="txtBox">
                                    <IoDesktopOutline size="40"/>
                                        <p>경력</p>
                                        <p>(주)지아이데이타</p>
                                        <p>(주)제타럭스시스템</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="outsideWork">
                        <p>* 외주 개발 또는 과외/레슨 문의는 위 연락처/이메일로 부탁드립니다.</p>
                    </div>
                </Section>
                <Section className="section">
                    <h2>SKILLS</h2>
                    <div className="skillBox">
                        <p>
                            FrontEnd : <br/>
                            HTML / XML / CSS / JavaScript <br/>
                            React.js / Jquery / JSP
                        </p>
                        <div className="line"></div>
                        <p>
                            BackEnd : <br/>
                            Node.js(Expree.js, Nest.js) / Java / MySQL / postgreSQL
                        </p>
                        <div className="line"></div>
                        <p>
                            tool : <br/>
                            Visual Studio Code / Eclipse(Spring) / Websquare5 / Nexacro
                        </p>
                    </div>
                </Section>
                <Section className="section">
                    <h2>ARCHIVING</h2>
                    <ul className="linkBox">
                        <li onClick={()=>window.open('https://github.com/tuy112/')}>
                            <h4>github</h4>
                            <p className="linkName">https://github.com/tuy112/</p>
                            <p className="linkIntro">
                                - 과거 프로젝트, 프로그램, 앱의 소스 코드<br/>
                                - 혼자서 코딩 연습을 한 소스 코드<br/>
                                - 부트캠프 시절 수강한 수업 과제 소스 코드
                            </p>
                        </li>
                        <li onClick={()=>window.open('https://jh-healing-place.tistory.com/192')}>
                            <h4>blog</h4>
                            <p className="linkName">https://jh-healing-place.tistory.com/192</p>
                            <p className="linkIntro">
                                - til + wil 기록공간<br/>
                                - 나만의 개발 메모장<br/>
                                - 등등 다양한 이야기 
                            </p>
                        </li>
                        <li onClick={()=>window.open('https://jelly-troodon-4ff.notion.site/Software-Developer-Kim-Jae-Hyeok-be4b14ad09ed4da5bd038c364109e8b4?pvs=4')}>
                            <h4>notion Link</h4>
                            <p className="linkName">https://jelly-troodon-4ff.notion.site/Software-Developer-Kim-Jae-Hyeok-be4b14ad09ed4da5bd038c364109e8b4?pvs=4</p>
                            <p className="linkIntro">
                                - 노션 이력서 
                            </p>
                        </li>
                    </ul>
                    <div class="signFlow">
                        <p>위 박스들을 클릭하세요 :&#41;</p>
                    </div>
                </Section>
                <Section className="section">
                    <h2>PROJECTS</h2>
                    <Link to = "/project">
                        <div className="goProject">
                            <p>Go Project!!</p>
                        </div>
                    </Link>
                </Section>
            </SectionsContainer>

            {/* footer */}
            <footer id="footer">
                <p>Made By FE.KimJaeHyeok</p>
            </footer>

            {/* 맨 위로! */}
            <div className="goTop"></div>
        </div>
    );
};

export default Home;