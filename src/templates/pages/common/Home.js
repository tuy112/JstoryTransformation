import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import Header from "../../component/Header";
import Footer from "../../component/Footer";

import '../../../static/css/common/reset.css';
import '../../../static/css/common/common.css';
import '../../../static/css/main.css';
import '../../../static/css/mobile/mobile.css';

function Home() {
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
            
            <p id="skipNav" className="hide">
                <a href="/">본문 바로가기</a>
            </p>

            <Header />

            <section id="container" className="main">
                <div className="select-wrap">
                    <h2>Developer Jay의 공간에 오신 모든 분들을 환영합니다 :&#41;</h2>
                    <div className="main-intro">
                        <div className="main-detail">
                            <h3>About Me</h3>
                            <p>안녕하세요! Developer Jay입니다.</p>
                            <p>새로운 도전과 배움을 즐기는 개발자입니다.</p>
                            <Link to="/profile" className="cta-button">
                                PROFILE로 바로가기
                            </Link>
                        </div>
                        <div className="main-detail">
                            <h3>TIL / WIL 공간</h3>
                            <p>오늘 내가 공부한 것을 기록하는 공간입니다.</p>
                            <Link to="/todo" className="cta-button">
                                기록 하러가기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;