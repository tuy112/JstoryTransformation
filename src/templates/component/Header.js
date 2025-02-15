import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // 햄버거 메뉴 토글 핸들러 최적화
    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <header id="header">
            <div className="inner">
                {/* Header Title */}
                <div className="header-title">
                    <h1 className="header-logo">
                        <Link to="/home" className="site-maintitle">Jstory</Link>
                        <span className="site-subtitle"> - Jay's Healing Space</span>
                    </h1>
                </div>
                
                {/* Header HamburgerMenu */}
                <button 
                    className="hamburger-menu" 
                    onClick={toggleMenu}
                    aria-label="메뉴 열기"
                    aria-expanded={isOpen}
                >
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={`side-menu ${isOpen ? "open" : ""}`} id="sideMenu">
                    <div className="login-state">
                        <h3 className="no-login">로그인이 필요합니다</h3>
                        <h3 className="yes-login">어서오세요</h3>
                    </div>
                    <ul className="menu-section">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/profile">About Me</Link>
                            <ul className="sub-section">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/project">Project</Link></li>
                                <li><Link to="/qna">FAQ</Link></li>
                                <li><Link to="/history">프로젝트연표</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/study">Jay's 공부방</Link>
                            <ul className="sub-section">
                                <li><Link to="/study/til">TIL</Link></li>
                                <li><Link to="/study/wil">WIL</Link></li>
                                <li><Link to="/study/certificate">정보처리기사</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/hobby">취미 기록방</Link>
                            <ul className="sub-section">
                                <li><Link to="/mountain">등산</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/projects">개인프로젝트 모음</Link>
                        </li>
                        <li>
                            <Link to="/projects">3D 공간으로 초대합니다!</Link>
                        </li>
                    </ul>

                    <ul className="bottom-menu">
                        <li><Link to="/todo">TODOLIST</Link></li>
                        <li>
                            <Link 
                                to="https://github.com/tuy112/Jstory" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Jstory ASIS
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="https://jstoryjay.notion.site/Jay-UI-UX-124211b2c60980b98d93f25d148bdcc3?pvs=4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                노션이력서
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/doc/Jstory_고도화프로젝트_화면설계서_v0.26_250115.pptx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                화면설계서 v0.26
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Header loginMenu */}
                <div className="login-buttons">
                    <div className="web-login">
                        <div className="main-button">로그인메뉴</div>
                        <div className="sub-buttons">
                            <Link to="/login" className="sub-button">로그인</Link>
                            <Link to="/signup" className="sub-button">회원가입</Link>
                        </div>
                    </div>
                    <div className="mobile-login">
                        <Link to="/login" className="main-button">LOGIN</Link>
                        <div className="sub-buttons">
                            <Link to="/signup" className="sub-button">회원가입</Link>
                            <Link to="/" className="sub-button">Gate 이동</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;