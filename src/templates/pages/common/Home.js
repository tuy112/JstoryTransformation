import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import '../../../static/css/common/reset.css';
import '../../../static/css/common/common.css';
import '../../../static/css/main.css';
import '../../../static/css/mobile/mobile.css';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailContent, setEmailContent] = useState("");

    // QNA 모달창 핸들러
    const openModal = useCallback((e) => {
        e.preventDefault();
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    // 이메일 전송 핸들러 
    const sendEmail = useCallback(() => {
        if (!emailContent.trim()) {
            alert("내용을 입력해주세요.");
            return;
        }

        const templateParams = {
            to_name: "mastercatch2@gmail.com",
            from_name: "Jstory방문자", 
            message: emailContent,
        };

        emailjs
            .send(
                "your_service_id",
                "your_template_id",
                templateParams,
                "your_user_id"
            )
            .then(() => {
                alert("이메일이 성공적으로 전송되었습니다!");
                setEmailContent("");
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error("이메일 전송 실패:", error);
                alert("이메일 전송에 실패했습니다.");
            });
    }, [emailContent]);

    // 별 생성 효과
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

    const modalClass = isModalOpen ? "modal open" : "modal";

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
                            <Link onClick={openModal} className="cta-button">
                                궁금한 점 물어보기
                            </Link>
                        </div>
                        <div className="main-detail">
                            <h3>TODOLIST</h3>
                            <p>로그인하고 들어가셔서 일일계획 짜보세요.</p>
                            <Link to="/todo" className="cta-button">
                                계획 짜러가기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <div className={modalClass}>
                <button 
                    className="modal-close-btn" 
                    onClick={closeModal}
                    aria-label="닫기"
                >
                    ×
                </button>

                <h2>Q&A</h2>
                <p>궁금한 건 다 물어보세요!</p>
                <textarea
                    placeholder="여기에 내용을 입력하세요."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows="5"
                    style={{ width: "100%", marginBottom: "10px" }}
                    aria-label="문의 내용"
                />
                <div className="modal-btn-wrap">
                    <button className="common-btn" onClick={sendEmail}>
                        이메일 전송
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;