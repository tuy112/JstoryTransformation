import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function Header() {
    // 1. 햄버거 메뉴 Onclick 기능
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="header">
            <h1>
                <Link to="/" className="site-title" aria-label="Home page">
                    Jstory
                </Link>
                <span className="site-subtitle"> - React X Java X MySQL</span>
            </h1>

            <button className="hamburger-menu" onClick={toggleMenu}>
                <IoArrowBack size={21} />
            </button>

            <div className={`side-menu ${isOpen ? "open" : ""}`} id="sideMenu">
                <ul className="menu-section">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/todo">[SideProject] JH TODOLIST</Link></li>
                    <li><Link to="/mountain">[SideProject] 등산 기록방</Link></li>
                    <li><Link to="/jGame">[SideProject] JWorld(게임)</Link></li>
                </ul>

                <ul className="bottom-menu">
                    <li><Link to="https://github.com/tuy112/JstoryTransformation">ASIS 1</Link></li>
                    <li><Link to="https://github.com/tuy112/Jstory">ASIS 2</Link></li>
                    <li><Link to="https://www.notion.so/Software-Developer-Kim-Jae-Hyeok-be4b14ad09ed4da5bd038c364109e8b4">노션이력서</Link></li>
                    <li>
                        <a
                            href="/doc/Jstory_고도화프로젝트_화면설계서_v0.22_250108.pptx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            화면설계서 v0.22
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;