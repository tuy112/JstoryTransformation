import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import '../css/reset.css';
import '../css/sub.css';
import me from '../images/about_man.png';

const Project = () => {
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
                    <h2>PROJECT</h2>
                </div>
            </section>

            {/* main */}
            <section className="main">
                <div class="projectBox project">
                    <div class="inner">
                        <div class="projectTxt">
                            <h2>PROJECT <em>[ 아래 항목을 클릭해주세요 ]</em></h2>
                            <p>
                                ☆ 1 <br/>
                                신한은행 통합단말 차세대프로젝트 [2022-02-03 ~ 2022-09-30]<br/>
                                - 업무명 : 화면로직개발<br/>
                                - 사용 언어 : 스프링,인젠트,자바 <br/>
                                - 단말(통합단말 변환 및 보정 개발)<br/>
                                웹스퀘어를 사용해서 구통합단말 as-is(map,txt파일)를 신통합단말 tobe(xml)로 바꾸는 전환개발을 담당 (+디지털창구)<br/>
                                + 결함관리 : 결함목록조회 및 처리<br/>
                                <br/>
                                [ 관련 링크 클릭 ==》 <a href="https://byline.network/2021/01/21-119/">신한은행 통합단말 관련 기사</a> ]

                            </p>
                            <p>=========================================================================================================</p>
                            <h3>내가 만든 프로젝트</h3>
                            <p><a href="./index.html"> 1. JStory : 저의 메인 페이지입니다.</a></p>
                            <p><a href="./project/bicycle/index.html"> 2. 국토종주 이야기 : 633km 국토종주 이야기</a></p>
                            <p><a href="./project/jboard-lv4/assets/index.html"> 3. Jboard : 게시판 CRUD</a></p>
                            <p><a href="./project/todo/index.html">4. Todo Page</a></p>
                            <p><a href="./project/">5. coding Test 준비..!  </a></p>
                            <p><a href="./project/manboWalk/index.html">6. team.Nivea를 소개합니다 - Python 사용  </a></p>
                            <p><a href="./project/manboWalk/index.html">7. ChiolGram - Node.js 최종 프로젝트</a></p>
                            <p><a href="./project/game-1/index.html">8. 내가 만든 (뼈만 있는) 첫 번째 게임 : 장애물 피하기</a></p>
                            <p><a href="./project/game-2/index.html">9. 내가 만든 두 번째 게임 : 사무라이를 죽여라</a></p>
                            <p><a href="./project/game-3/index.html">10. 내가 만든 세 번째 게임 : 스네이크 게임</a></p>
                        </div>
                    </div>
                </div>

                <div class="projectBox education">
                    <div class="inner">
                        <div class="program">
                            <h2>EDUCATION</h2>
                            <p>
                                1. 스파르타코딩클럽 Node.js백엔드 과정<br/>
                                -강남대학교 산학협력단 주관 ( 1000시간 )
                            </p>
                            <p>    
                                2. 웹콘텐츠 UI/UX 디자인 & 프론트앤드(React.js)<br/>
                                -강남 이젠아카데미 ( 880시간 )
                            </p>
                            <p>
                                3. JAVA Enterprise developer 양성 프로그램<br/>
                                -강남대학교 산학협력단 주관 ( 800시간 )
                            </p>
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

export default Project;