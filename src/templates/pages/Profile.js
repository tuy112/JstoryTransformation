import React, { useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

// image
import me from '../../static/images/about_man.png';

const Profile = () => {
    // 별 생성
        useEffect(() => {
            const starContainer = document.querySelector('.stars');
            if (!starContainer) return;
    
            const createStar = () => {
                const star = document.createElement('div');
                const size = Math.random() * 3 + 1;
                
                star.style.cssText = `
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    width: ${size}px;
                    height: ${size}px;
                `;
                
                return star;
            };
    
            const stars = Array.from({ length: 100 }, createStar);
            starContainer.append(...stars);
    
            return () => {
                starContainer.innerHTML = '';
            };
        }, []);

    return (
        <div id="wrap">
            <div className="stars" />

            {/* 본문 바로가기 */}
            <p id="skipNav" className="hide"><a href="./index.html">본문 바로가기</a></p>

            {/* header */}
            <Header />

            {/* main */}
            <section id="container" className="main">
                <div className="profile intro">
                    <div className="txtWrap">
                        <h2>About ME</h2>
                        <img src={me} alt="Jay"/>
                        <p>"기획, 디자인, 개발까지 다하는 인간 스타트업이 되기 위해서 노력 중에 있습니다. <br/>
                        비록 행정, 법, 경영학을 전공하였으나, 졸업 이후 꾸준히 컴공공부를 하였으며<br/>
                        개발자가 되었고 젊은 나이에 대규모 SI 프로젝트를 경험하였습니다.<br/>
                        React.js + Java(Spring)가 제 주력 언어이며 Node.js도 사용가능합니다.<br/>
                        <br/>
                        무엇이든 시작하면 제대로 하는 성격의 소유자, 김재혁!<br/>
                        함께 즐겁고 열정적으로 무언가를 만들 준비가 되어 있습니다!!"</p>
                    </div>
                </div>

                <hr/>

                <div className="profile addi">
                    <div className="txtWrap">
                        <h2>Capability</h2>
                        <p>Linux Server Deverlop</p>
                        <p>Java &#40;Spring&#41; </p>
                        <p>Javascript &#40;React.js, Node.js&#41; </p>
                        <p>Python &#40;Flask&#41; </p>
                        <p>Publishing with html, CSS, JS </p>
                        <p>Connecting DB (using MySQL, PostgreSQL, Oracle) </p>
                        <p>Using Eclipse, Websquare5, Nexacro (Java, JSP.. etc) </p>
                        <p>UX Research / UI Prototyping </p>
                    </div>
                </div>

                <hr/>

                <div className="profile lifeGraph">
                    <div className="lifeGraph">
                        <div className="shortView">
                            <h4>개발 Story [2021 ~ 2024]</h4>
                            <dl>
                                <dt>2025년</dt>
                                <dd><strong>기록관리시스템 구축 및 유지보수 개발 (Oracle X Linux 사용)</strong><em>2025-02 ~ ing</em></dd>
                                <dd><strong>Mikep 전자결재 문서 이관 사업</strong><em>2025-02 ~ 2025-10</em></dd>
                                <dd><strong>의료기기 플랫폼 프로토타입 제작 </strong><em>2024-12 ~ 2025-01</em></dd>
                            </dl>
                            <dl>
                                <dt>2024년</dt>
                                <dd><strong>Jstory 고도화 프로젝트 (2차 리모델링 - 프론트:React/백:Java) </strong><em>2024-08 ~ ing</em></dd>
                                <dd><strong>통신 L사 관리자(Admin) 페이지 현대화 프로젝트 </strong><em>2024-06 ~ 2024-09</em></dd>
                                <dd><strong>Jstory 고도화 프로젝트 (React.js 적용 중) </strong><em>2024-02 ~ 2024-04</em></dd>
                            </dl>
                            <dl>
                                <dt>2023년</dt>
                                <dd><strong>공공 L사 고도화 프로젝트 (2D 고도화) </strong><em>2023-10 ~ 2024-02</em></dd>
                                <dd><strong>스파르타코딩클럽 커리어톤 (취업지원 프로그램) </strong><em>2023-10</em></dd>
                                <dd><strong>스파르타코딩클럽 Node.js 백엔드 과정 수료</strong><em>2023-05 ~ 2022-09</em></dd>
                            </dl>
                            <dl>
                                <dt>2022년</dt>
                                <dd><strong>금융 S사 통합단말 차세대프로젝트 [전환 개발]</strong><em>2022-02 ~ 2022-12</em></dd>
                            </dl>
                            <dl>
                                <dt>2021년</dt>
                                <dd><strong>웹콘텐츠 UI/UX 디자인 & 프론트엔드 수료</strong><em>2021.07 ~ 2021-12</em></dd>
                                <dd><strong>일본 Java Enterprise Developer 양성과정(Kmove) 수료</strong><em>2020.12 ~ 2021.07</em></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Profile;