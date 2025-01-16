import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import '../../../static/css/common/reset.css';
import '../../../static/css/common/common.css';
import '../../../static/css/main.css';
import '../../../static/css/mobile/mobile.css';


function Home() {
    // const navigate = useNavigate();
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // QNA 모달창 열기 + 닫기
    // const openModal = (e) => {
    //     e.stopPropagation();
    //     console.log("모달 열림");
    //     setIsModalOpen(true);
    // };
    // const closeModal = () => {
    //     console.log("모달 닫힘");
    //     setIsModalOpen(false);
    // };

    // 밤하늘의 별을...
    useEffect(() => {
        const starContainer = document.querySelector('.stars');
        const starCount = 100;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            starContainer.appendChild(star);
        }
    }, []);

    return (
        <div id="wrap">
            {/* 밤 하늘의 별을... */}
            <div className="stars"></div>

            {/* 본문 바로가기 */}
            <p id="skipNav" className="hide"><a href="/">본문 바로가기</a></p>

            {/* header */}
            <Header />

            {/* body */}
            <section id="container" className="main">
                <div className="select-wrap">
                    <h2>Developer Jay의 공간에 오신 모든 분들을 환영합니다 :&#41;</h2>
                    <ul className="main-intro">
                        <li className="main-detail">
                            <Link to="">1</Link>
                        </li>
                        <li className="main-detail">
                            <Link to="">2</Link>
                        </li>
                        <li className="main-detail">
                            <Link to="/qna">
                                저에 대해 궁금한 것이 있으면<br/>
                                언제든 물어보세요.
                            </Link>
                        </li>
                        <li className="main-detail">
                            <Link to="/three">Jay의 3D공간으로 Go!</Link>
                        </li>
                    </ul>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </div> 
    );
};

export default Home;