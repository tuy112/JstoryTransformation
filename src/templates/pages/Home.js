import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

import '../../static/css/common/reset.css';
import '../../static/css/common/common.css';
import '../../static/css/main.css';
import github from '../../static/images/GithubLogo.png';
import blog from '../../static/images/TstoryLogo.png';
import youtube from '../../static/images/YoutubeLogo.png';
// import walkGif from '../../static/images/modal/Walk.gif';


const Home = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="wrap">
            {/* 본문 바로가기 */}
            <p id="skipNav" className="hide"><a href="/">본문 바로가기</a></p>

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
                        <li><Link to="/qna">[SideProject] QNA</Link></li>
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

                        <div className="box-item item3" onClick={() => navigate('/todo')}>
                            <div className="box-front">
                                <h3>TODOLIST</h3>
                                <p>나만의공부방<br/> + <br/>운동기록</p>
                            </div>
                            <div className="box-back">
                                <p>Click to Visit Page 3</p>
                            </div>
                        </div>

                        <div className="box-item item4" onClick={() => navigate('/qna')}>
                            <div className="box-front">
                                <h3>QNA</h3>
                                <p>실시간 채팅 X 게시판</p>
                            </div>
                            <div className="box-back">
                                <p>Click to Visit Page 4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer id="footer">
                <h3>CONTACT ME</h3>
                <ul className="links">
                    <li><Link to="https://github.com/tuy112"><img src={github} alt="깃허브"/><em>GITHUB</em></Link></li>
                    <li><Link to="https://jh-healing-place.tistory.com/"><img src={blog} alt="티스토리"/><em>BLOG</em></Link></li>
                    <li><Link to="https://www.youtube.com/channel/UCIUZejYbHXZOHhwUokcRBUQ"><img src={youtube} alt="유튜브"/><em>YOUTUBE</em></Link></li>
                </ul>
                <div className="always">
                    <p>Future Korean NO.1 Developer</p>
                </div>
	        </footer>

            {/* Modal */}
            {/* {modalOpen && (
                <div 
                    className="modal" 
                    ref={modalBackground} 
                    onClick={e => {
                        if (e.target === modalBackground.current) {
                            setModalOpen(false);
                        }
                    }}
                >
                    <div className="modal-popup">
                        <div className="modal-txt">
                            <p>지금 바로 이동합니다~ 잠시만 기다려주세요^^</p>
                            <p>물이라도 한잔하고 와</p>
                        </div>
                        <div className="loading" id="load">
                            <img src={walkGif} alt="loading"/>
                        </div>
                    </div>
                </div>
            )} */}
        </div> 
    );
};

export default Home;