import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import '../../../static/css/common/reset.css';
import '../../../static/css/common/common.css';
import '../../../static/css/main.css';
// import walkGif from '../../static/images/modal/Walk.gif';
import QnaModal from '../QnaModal';


function Home() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // QNA 모달창 열기 + 닫기
    const openModal = (e) => {
        e.stopPropagation();
        console.log("모달 열림");
        setIsModalOpen(true);
    };
    const closeModal = () => {
        console.log("모달 닫힘");
        setIsModalOpen(false);
    };

    return (
        <div id="wrap">
            {/* 본문 바로가기 */}
            <p id="skipNav" className="hide"><a href="/">본문 바로가기</a></p>

            {/* header */}
            <Header />

            {/* body */}
            <section id="container" className="main">
                <div className="select-wrap">
                    <h2>아래 버튼을 클릭해서 원하는 페이지로 이동하세요 ▼</h2>
                    <div className="select-box" id="selectBox">
                        <div className="box-item item1" onClick={() => navigate('/profile')}>
                            <div className="box-front">
                                <h3>PROFILE</h3>
                                <p>JH를 소개합니다!</p>
                            </div>
                            <div className="box-back">
                                <p>Click to Visit Profile Page</p>
                            </div>
                        </div>

                        <div className="box-item item2" onClick={() => navigate('/project')}>
                            <div className="box-front">
                                <h3>PROJECT</h3>
                                <p>JH의 개발 일대기</p>
                            </div>
                            <div className="box-back">
                                <p>Click to Visit Project Page</p>
                            </div>
                        </div>

                        <div className="box-item item3" onClick={() => navigate('/login')}>
                            <div className="box-front">
                                <h3>TODOLIST</h3>
                                <p>나만의공부방<br/> + <br/>운동기록</p>
                            </div>
                            <div className="box-back">
                                <p>Click to Visit Page 3</p>
                            </div>
                        </div>

                        <div className="box-item item4" onClick={openModal}>
                            <div className="box-front">
                                <h3>QNA</h3>
                                <p>저에 대해서 궁금한 점을 물어보세요!</p>
                            </div>
                            <div className="box-back">
                                <p>Click to Visit Page 4</p>
                            </div>
                            <QnaModal isOpen={isModalOpen} onRequestClose={closeModal} />
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </div> 
    );
};

export default Home;