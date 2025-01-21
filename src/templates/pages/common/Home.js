import React, { useState, useEffect } from "react";
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

    // QNA 모달창 열기 + 닫기
    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 이메일 보내기
    const sendEmail = () => {
        if (!emailContent) {
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
                setIsModalOpen(false); // 모달 닫기
            })
            .catch((error) => {
                console.error("이메일 전송 실패:", error);
                alert("이메일 전송에 실패했습니다.");
            });
    };

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
                            <Link onClick={openModal}>
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

            {/* Modal - 이메일 전송 */}
            <div className={`modal ${isModalOpen ? "open" : ""}`}>
                <button 
                    className="modal-close-btn" 
                    onClick={closeModal}>×
                </button>

                <h2>Q&A</h2>
                <p>궁금한 건 다 물어보세요!</p>
                <textarea
                    placeholder="여기에 내용을 입력하세요."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows="5"
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <div className="modal-btn-wrap">
                    <button className="common-btn" onClick={sendEmail}>이메일 전송</button>
                </div>
            </div>
        </div> 
    );
};

export default Home;