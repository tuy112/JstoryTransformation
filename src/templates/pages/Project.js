import React, { useState } from "react";
import { Link } from 'react-router-dom';

// icon
import { IoArrowBack } from "react-icons/io5";

import '../../static/css/common/reset.css';
import '../../static/css/common/common.css';
import '../../static/css/sub.css';

const Project = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="wrap">
            {/* 본문 바로가기 */}
            <p id="skipNav" className="hide"><a href="./index.html">본문 바로가기</a></p>

            {/* header */}
            <header id="header">
                <h1>
                    <Link to="/" className="site-title" aria-label="Home page">
                        Jstory
                    </Link>
                    <span className="site-subtitle"> - React X Java X MySQL</span>
                </h1>

                <button className="hamburger-menu" onClick={toggleMenu}>
                    <IoArrowBack size={21}/>
	            </button>
                
                <div className={`side-menu ${isOpen ? 'open' : ''}`} id="sideMenu">
                    <ul className="menu-section">
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/profile">Profile</Link></li>
                        <li><Link to = "/project">Project</Link></li>
                        <li><Link to="/todo">[SideProject] JH TODOLIST</Link></li>
                        <li><Link to="/mountain">[SideProject] 등산 기록방</Link></li>
                        <li><Link to="/jGame">[SideProject] JWorld(게임)</Link></li>
                    </ul>

                    <ul className="bottom-menu">
                        <li><Link to = "https://github.com/tuy112/JstoryTransformation">ASIS 1</Link></li>
                        <li><Link to = "https://github.com/tuy112/Jstory">ASIS 2</Link></li>
                        <li><Link to = "https://www.notion.so/Software-Developer-Kim-Jae-Hyeok-be4b14ad09ed4da5bd038c364109e8b4">노션이력서</Link></li>
                        <li><Link to = "">API연동기획서(엑셀)</Link></li>
                    </ul>
                </div>
            </header>

            {/* main */}
            <section className="main">
                <div className="projectBox project">
                    <div className="inner">
                        <div className="projectTxt">
                            <h2>PROJECT <em>[ 아래 항목들을 확인해주세요 ]</em></h2>
                            <div className="projectDetailBox">
                                <p>
                                    ☆ 3 <br/>
                                    LGU+ 관리자(Admin) 페이지 현대화 프로젝트<br/> 
                                    [2024-06 ~ 2024-09]<br/>
                                    - 업무명 : 화면 퍼블리싱 및 프론트엔드 개발 + API 연동(CRUD)<br/>
                                    - 사용 언어 : Java, Thymeleaf, BootstrapCSS, Javascript, MongoDB, MySQ <br/>
                                    - 개발 환경 : Eclipse(Spring Boot)<br/>
                                    - 소속 회사 : LGU+ (소프트XX)<br/>
                                    - 성과 : 7월 한달 간 구현 / 8월 테스트 기간 / 9월 인수인계 단계<br/>
                                    - 주요 업무 : <br/>
                                    "화면 퍼블리싱부터 프론트엔드 개발, 프론트와 백 API 연동"<br/>
                                    "화면 설계서 및 규격서를 보면서 구현 단계 (7월)"<br/>
                                    "구현한 화면에 대해서 직접 테스트 진행 및 수정 (8월 진행 예정)"<br/>
                                    "인수테스트 및 최종 완성 (9월)"<br/>
                                    "각 페이지 리스트 목록 CRUD"<br/>
                                    "통계 페이지 일괄 작업"
                                </p>
                            </div>
                            <div className="projectDetailBox">
                                <p>
                                    ☆ 2 <br/>
                                    LX플랫폼 고도화 프로젝트<br/> 
                                    [2023-11-06 ~ 2024-01-26]<br/>
                                    - 업무명 : 플랫폼 2D 환경 고도화 팀<br/>
                                    - 사용 언어 : Java(Spring), postgreSQL <br/>
                                    <br/>
                                    - API 사용 건 수 요구 분석 (ppt제작) <br/>
                                    - 막대그래프 &rarr; 선형그래프 (차트라이브러리 - chart.js 사용)<br/>
                                    - 영상타일링 레이어 관리 신규 개발 <br/>
                                    - 요구 분석 (PPT 정리) <br/>
                                    - 오픈API 데이터 GET <br/>
                                    - 기존에 만들어져 있던 DB TABLE 확인 및 수정작업 (selectOne)<br/>
                                    - 미리보기 로직설계 <br/>
                                    - 지도 위에 레이어 중첩 기능 구현 <br/>
                                </p>
                            </div>
                            <div className="projectDetailBox">
                                <p>
                                    ☆ 1 <br/>
                                    신한은행 통합단말 차세대프로젝트<br/>  
                                    [2022-02-03 ~ 2022-09-30]<br/>
                                    - 업무명 : 화면로직개발<br/>
                                    - 사용 언어 : JavaScript, xml, Java<br/>
                                    <br/>
                                    - 구형통합단말( map과 txt파일 ) → 신형통합단말( xml ) 로 전환 개발 <br/>
                                    - 서비스 매핑 확인 및 수정 (DB에서 데이터가 잘 내려오는지 확인) <br/>
                                    - 결함목록 확인 및 수정 (통합테스트,인수테스트 단계 개발 수행) <br/>
                                    <br/>
                                    [ 관련 링크 클릭 ==》 <a href="https://byline.network/2021/01/21-119/">신한은행 통합단말 관련 기사</a> ]

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="projectBox education">
                    <div className="inner">
                        <h2>EDUCATION</h2>
                        <div className="program">
                            <p>
                                1. 스파르타코딩클럽 Node.js백엔드 과정<br/>
                                - (주)스파르타 ( 1300시간 )
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
                <p>Made By Kim Jae Hyeok</p>
            </footer>
        </div>
    );
}

export default Project;