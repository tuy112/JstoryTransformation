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
                <div className="inner">
                    <h2>PROJECT</h2>
                </div>
            </section>

            {/* main */}
            <section className="main">
                <div className="projectBox project">
                    <div className="inner">
                        <div className="projectTxt">
                            <h2>PROJECT <em>[ 아래 항목을 클릭해주세요 ]</em></h2>
                            <p>
                                ☆ 1 <br/>
                                신한은행 통합단말 차세대프로젝트 [2022-02-03 ~ 2022-09-30]<br/>
                                - 업무명 : 화면로직개발<br/>
                                - 사용 언어 : JavaScript, xml, Java<br/>
                                - 단말(통합단말 변환 및 보정 개발)<br/>
                                웹스퀘어를 사용해서 구통합단말 as-is(map,txt파일)를 신통합단말 tobe(xml)로 바꾸는 전환개발을 담당 (+디지털창구)<br/>
                                + 결함관리 : 결함목록조회 및 처리<br/>
                                <br/>
                                [ 관련 링크 클릭 ==》 <a href="https://byline.network/2021/01/21-119/">신한은행 통합단말 관련 기사</a> ]

                            </p>
                            <p>
                                ☆ 2 <br/>
                                LX플랫폼 고도화 프로젝트 [2023-11-06 ~ 2024-01-26]<br/>
                                - 업무명 : 플랫폼 2D 환경 고도화 팀<br/>
                                - 사용 언어 : Java(Spring), postgreSQL <br/>
                                - API 사용건 수 요구 분석 (ppt제작)<br/>
                                - 막대그래프 -&lt; 선형그래프<br/>
                                - 영상타일링 레이어 관리 신규 개발<br/>
                                <br/>
                                - 요구 분석 (ppt 정리)<br/>
                                - 배경지도 가져오는 곳 파악<br/>
                                - 영상 레이어 가져오는 곳 파악<br/>
                                - 미리보기 로직 제작 (미완성-로직공유 가능)<br/>
                                - 저장 API Post (insert)<br/>
                                - 저장 API GET 하나 (selectOne)<br/>
                                - 저장 API GET 전체 (selecetList)<br/>
                                - 웹맵을 실행시키면 레이어를 그 위에 중첩 + 그 레이어로 바로 이동시키는 로직 완성<br/>
                                - 인수인계 PPT 직접 제작 후, 이어 받을 개발자에게 내용 설명<br/>
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

                <div className="projectBox education">
                    <div className="inner">
                        <div className="program">
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