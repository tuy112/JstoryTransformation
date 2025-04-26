import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

const Project = () => {
    const navigate = useNavigate();

    return (
        <div id="wrap">
            {/* 본문 바로가기 */}
            <p id="skipNav" className="hide"><a href="./index.html">본문 바로가기</a></p>

            {/* header */}
            <Header />

            {/* main */}
            <section className="main">
                <div className="select-wrap">
                    <h2>
                        PROJECT 
                        <em>[ 아래 카드에 커서를 올려보세요! ]</em>
                    </h2>
                    <div className="select-box" id="selectBox">
                        <div className="box-item item1" onClick={() => navigate('/profile')}>
                            <div className="box-front">
                                <h3>의료기기 플랫폼 프로토타입 제작 (Facial Implant 요구분석)</h3>
                                <p>2024-11 ~ 2025-01</p>
                            </div>
                            <div className="box-back">
                                <p>
                                    ☆ 1 <br/>
                                    - 주요 업무 : <br/>
                                    "시장조사 (SWOT분석, STP전략 분석, 마케팅 mix 4p전략, 경쟁사 밴치마킹)"<br/>
                                    "요구분석 정의서 제작"<br/>
                                    "화면설계서 제작"<br/>
                                    "기능명세서 제작"<br/>
                                    "추후, 원격으로 프로토타입 추가 개발 예정(주말)"<br/>
                                    "경남 김해 상주"
                                </p>
                            </div>
                        </div>

                        <div className="box-item item2" onClick={() => navigate('/profile')}>
                            <div className="box-front">
                                <h3>LGU+ 관리자(Admin) 페이지 현대화 프로젝트</h3>
                                <p>2024-06 ~ 2024-09</p>
                            </div>
                            <div className="box-back">
                                <p>
                                    ☆ 2 <br/>
                                    - 주요 업무 : <br/>
                                    "화면 퍼블리싱부터 프론트엔드 개발, 프론트와 백 API 연동"<br/>
                                    "화면 설계서 및 규격서를 보면서 구현 단계" (7월)<br/>
                                    "구현한 화면에 대해서 직접 테스트 진행 및 수정" (8월)<br/>
                                    "인수테스트 및 최종 완성" (9월)<br/>
                                    "각 페이지 리스트 목록 CRUD"<br/>
                                    "통계 페이지 일괄 작업"
                                </p>
                            </div>
                        </div>

                        <div className="box-item item3" onClick={() => navigate('/profile')}>
                            <div className="box-front">
                                <h3>LX플랫폼 고도화 프로젝트</h3>
                                <p>[2023-11-06 ~ 2024-01-26]</p>
                            </div>
                            <div className="box-back">
                                <p>
                                    ☆ 3 <br/>
                                    - 주요업무 : <br/>
                                    "API 사용 건 수 분석" <br/>
                                    "차트라이브러리 사용" - chart.js <br/>
                                    "지도 위에 레이어(도형) 올리는 기능 개발"<br/>
                                        - 요구 분석 (PPT 정리)<br/>
                                        - 오픈API 데이터 GET<br/>
                                        - 기존에 만들어져 있던 DB TABLE 확인 및 수정작업
                                </p>
                            </div>
                        </div>

                        <div className="box-item item4" onClick={() => navigate('/profile')}>
                            <div className="box-front">
                                <h3>신한은행 통합단말 차세대프로젝트</h3>
                                <p>[2022-02-03 ~ 2022-09-30]</p>
                            </div>
                            <div className="box-back">
                                <p>
                                    ☆ 4 <br/>
                                    - 주요업무 : <br/>
                                    "금융권 통합단말 차세대 프로젝트 프론트 개발 진행"<br/>
                                    "기존의 ASIS 기반의 구형 서비스에 대한한 TOBE 개발"<br/>
                                    "서비스 매핑 확인 및 내용 수정" (백 API 연동)<br/>
                                    "결함목록 확인 및 수정" (통합테스트,인수테스트 단계 개발 수행)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Project;