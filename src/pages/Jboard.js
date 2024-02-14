import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import '../css/reset.css';
import '../css/jboard.css';

const Jboard = () => {
    // 1. 햄버거 메뉴 구현
    function hamburgerMenu() {
        const menu = document.querySelector(".menu");
        const navBar = document.querySelector("#navBar");

        menu.classList.toggle("active");
        if (navBar.style.display === "none" || navBar.style.display === "") {
            navBar.style.display = "block";
        } else {
            navBar.style.display = "none";
        }
    };

    useEffect(() => { 
        hamburgerMenu();
        console.log('Jstory에 오신 것을 환영합니다!');
    }, []);
    
    return (
        <>
            <header id="header">
                <div className="inner">
                    <div className="menu menuIcon" onClick={ hamburgerMenu }>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <h1><a href="#">Jstory</a></h1>

                <div className="navBar" id="navBar">
                    <ul className="gnb">
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/profile">Profile</Link></li>
                        <li><Link to = "/project">Project</Link></li>
                        <li><Link to = "/bikeTour">633KM 자전거국종이야기</Link></li>
                        <li><a href="https://jelly-troodon-4ff.notion.site/JH_Recorder-2024-ac2bd8b5635940fe82c9d95fd2886ee2?pvs=4">JH Notion Recorder</a></li>
                        <li><a href="https://jh-healing-place.tistory.com/">Jstol Blog</a></li>
                        <li><a href="#">JGAME</a></li>
                    </ul>

                    <ul className="jboard">
                        <li><Link to = "/jboard">게시판 &lt;Jboard&gt;</Link></li>
                        <li><a href="#">실시간 채팅</a></li>
                    </ul>
                </div>
                    <nav className="nav">
                        <ul className="gnb">
                            <li><a href="./login.html">로그인</a></li>
                            <li><a href="./signup.html">회원가입</a></li>
                            <li><a onclick="logout();">로그아웃</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="container" class="main">
                <div className="jboard">
                    <h1>게시글 목록</h1>
                    <table id="post-list" className="postList">
                        <thead>
                            <tr>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성 날짜</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>제목예시입니다</td>
                                <td>userId</td>
                                <td>createAt</td>
                                <td>내용</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <div className="postBox">
                                <input type="text" id="comment-author" class="title" placeholder="제목" />
                                <input type="text" id="comment-content" class="content" placeholder="내용" />
                                <button id="comment-submit" className="commentBtn">게시글 올리기</button>
                            </div>
                        </tfoot>
                    </table>
                </div>
            </main>

            {/* footer */}
            <footer id="footer">
                <p>Made By FE.KimJaeHyeok</p>
            </footer>
        </>
    )
}

export default Jboard;