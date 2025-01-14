import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiGame } from "react-icons/bi";

function Header() {
    // 1. 햄버거 메뉴 Onclick 기능
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="header">
            <div className="inner">
                {/* Header Title */}
                <div className="header-title">
                    <h1 className="header-logo">
                        <Link to="/" className="site-maintitle">Jstory</Link>
                        <span className="site-subtitle"> - Jay's Hideout</span>
                    </h1>
                </div>
                
                {/* Header HamburgerMenu */}
                <button className="hamburger-menu" onClick={toggleMenu}>
                    <BiGame color="#333" size={21} />
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
                                <li><Link to ="/profile">Profile</Link></li>
                                <li><Link to ="/project">Project</Link></li>
                                <li><Link to ="/qna">FAQ</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/project">Jay's 공부방</Link>
                            <ul className="sub-section">
                                <li><Link>TIL</Link></li>
                                <li><Link>WIL</Link></li>
                                <li><Link>정보처리기사</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/todo">취미 기록방</Link>
                            <ul className="sub-section">
                                <li><Link>등산</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/mountain">개인프로젝트 모음</Link>
                        </li>
                    </ul>

                    <ul className="bottom-menu">
                        <li><Link to="https://github.com/tuy112/JstoryTransformation">ASIS 1</Link></li>
                        <li><Link to="https://github.com/tuy112/Jstory">ASIS 2</Link></li>
                        <li><Link to="https://www.notion.so/Software-Developer-Kim-Jae-Hyeok-be4b14ad09ed4da5bd038c364109e8b4">노션이력서</Link></li>
                        <li>
                            <Link
                                to="/doc/Jstory_고도화프로젝트_화면설계서_v0.22_250108.pptx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                화면설계서 v0.22
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Header loginMenu */}
                <div className="login-menu">
                    <ul className="login-bar">
                        <li>
                            <Link to="/login">LOGIN</Link>
                        </li>
                        <li>
                            <Link to="/signup">JOIN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;