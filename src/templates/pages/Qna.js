import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

// icon
import { IoArrowBack } from "react-icons/io5";

import '../../static/css/common/reset.css';
import '../../static/css/common/common.css';
import "../../static/css/qna/qna.css";

const Qna = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { headersName, children } = props;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return(
        <div id="wrap">
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
                        <li><Link to = "/todo">[SideProject] TODOLIST</Link></li>
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


            <div className="board">
                <div className="card-header">
                    <h1>QNA - 저에 대해 궁금한 것을 물어보세요^^</h1>

                    <label>검색</label>
                    <input 
                        type="search" 
                        id="searchInput" 
                        placeholder="검색어를 입력해주세요" 
                    />
                    <button className="search-btn" id="searchBtn">검색</button>
                </div>

                <table className="common-table">
                    <thead>
                        <tr>
                            {
                                headersName.length > 0 ? (
                                    headersName.map((item, index) => (
                                        <td className="common-table-header-column" key={index}>
                                            {item}
                                        </td>
                                    ))
                                ) : (
                                    <td className="common-table-header-column" colSpan="100%">
                                        헤더가 없습니다.
                                    </td>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            children && React.Children.count(children) > 0 ? (
                                children
                            ) : (
                                <tr>
                                    <td className="common-table-no-data" colSpan={headersName.length || 1}>
                                        데이터가 없습니다.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// PropTypes를 이용한 props 타입 검사
Qna.propTypes = {
    headersName: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.node
};

Qna.defaultProps = {
    headersName: [], // 기본값을 빈 배열로 설정
};

export default Qna;