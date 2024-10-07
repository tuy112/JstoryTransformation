import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import Calendar from 'react-calendar';
import { IoArrowBack, IoAddOutline } from "react-icons/io5";

import '../../../static/css/common/reset.css';
import '../../../static/css/todo/todo.css';
import github from '../../../static/images/GithubLogo.png';
import blog from '../../../static/images/TstoryLogo.png';
import youtube from '../../../static/images/YoutubeLogo.png';

// import 'react-calendar/dist/Calendar.css';

const Todo = () => {
    // 데이터 상태
    const [data, setData] = useState('');
    const [inputValue, setInputValue] = useState('');

    // 운동기록 시작
    const [weight, setWeight] = useState('');
    const [exerciseHours, setExerciseHours] = useState('');
    const [records, setRecords] = useState([]);
    const [selectedRecords, setSelectedRecords] = useState([]);

    const [accounting, setAccounting] = useState([]);
    const [expense, setExpense] = useState('');
    const [description, setDescription] = useState('');

    // const [selectedDate, setSelectedDate] = useState(new Date());

    // 날짜 포맷 함수
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 1. header 토글 버튼 기능
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    // 2-1. 할 일 추가
    const handleAddTodo = () => {
        if (inputValue.trim() === '') {
            alert('할 일을 입력해주세요ㅠ_ㅠ');
            return;
        }
        const newTodo = {
            contents: inputValue,
            completeYn: 'N'
        };

        fetch('/todoList/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        })
        .then(() => {
            // 데이터 새로 고침
            fetchTodo();
            setInputValue('');
        })
        .catch(err => {
            console.error('Error details:', err.response ? err.response.data : err.message);
            alert('서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        });
    };

    // 2-2. 할 일 삭제
    const handleDeleteTodo = (id) => {
        fetch(`/todoList/delete?id=${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            // 데이터 새로 고침
            fetchTodo();
        })
        .catch(error => {
            console.error('Error deleting todo:', error);
            alert('할 일을 삭제하는 중 오류가 발생했습니다.');
        });
    };

    // 2-3. 할 일 목록 데이터 로드
    const fetchTodo = () => {
        fetch("/todoList")
        .then(response => response.json())
        .then(data => {                
            setData(data);            
        });
    };

    // 2-4. 할 일 목록 (완료여부) 토글 기능
    const handleToggleComplete = (id) => {
        const updatedData = data.map((info) => {
            if (info.id === id) {
                return {
                    ...info,
                    completeYn: info.completeYn === 'Y' ? 'N' : 'Y',
                };
            }
            return info;
        });
    
        setData(updatedData); // 상태를 업데이트하는 함수 (예: setData)
    };

    // 3. 몸무게 및 운동 기록
    const handleAddRecord = () => {
        if (weight && exerciseHours) {
            const newRecord = {
                weight,
                exerciseHours,
                recordDate: getCurrentDate(),
                createdAt: getCurrentDate()
            };
            fetch('/records/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRecord)
            }).then(response => response.json())
              .then(() => {
                  setRecords([...records, { ...newRecord, id: Date.now() }]);
                  setWeight('');
                  setExerciseHours('');
              });
        } else {
            alert("몸무게와 운동 시간을 입력하세요.");
        }
    };

    // 4. 체크박스 컬럼 (몸무게 기록 삭제)
    const handleSelectRecord = (id) => {
        setSelectedRecords(prev => prev.includes(id) ? prev.filter(recordId => recordId !== id) : [...prev, id]);
    };

    // 선택된 기록 삭제 함수
    const handleDeleteSelectedRecords = () => {
        fetch('/records/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: selectedRecords })
        }).then(() => {
            setRecords(records.filter(record => !selectedRecords.includes(record.id)));
            setSelectedRecords([]);
        });
    };

    // 5. 가계부
    // const handleAddAccounting = () => {
    //     if (expense && description) {
    //         const newRecord = {
    //             expense,
    //             description,
    //             date: getCurrentDate(),
    //         };
    //         setAccounting([...accounting, { ...newRecord, id: Date.now() }]);
    //         setExpense('');
    //         setDescription('');
    //     } else {
    //         alert('지출 내역과 설명을 입력하세요.');
    //     }
    // };

    // const onDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    // 컴포넌트가 마운트될 때 데이터 로드
    useEffect(() => {
        fetchTodo();

        // fetch('/todoList')            
        // .then(response => response.text())            
        // .then(message => {                
        //     setMessage(message);            
        // });
    }, []);

    return (
        <div id="wrap">
            {/* header */}
            <header id="header">
                <h1>
                    <Link to="/" className="site-title" aria-label="Home page">
                        Jstory
                    </Link>
                    <span className="site-subtitle"> - TODOLIST (오늘 할일을 미루지말자!)</span>
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
                {/* todoList */}
            <div className="todo-container" id="todolist">
                <div className="title-section">
                    <h1>JH TODOLIST</h1>
                </div>
                <div className="input-section">
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="todo-input">오늘 할 일!!</label>
                            <input
                                type="text"
                                id="todo-input"
                                className="todo-input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                autoFocus
                            />
                            <button type="button" className="add-button" onClick={handleAddTodo}>
                                <IoAddOutline />
                            </button>
                        </div>
                    </form>
                </div>

                {/* 할 일 쌓이는 테이블 */}
                <table className="todo-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>내용</th>
                            <th>완료 여부</th>
                            <th>등록일</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody className="todo-list">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="5">할 일이 없습니다. 일좀 해..</td>
                            </tr>
                        ) : (
                            data.map((info) => (
                                <tr key={info.id}>
                                    <td>{info.id}</td>
                                    <td>{info.contents}</td>
                                    <td onClick={() => handleToggleComplete(info.id)}>
                                        {info.completeYn === 'Y' ? '완료' : '미완료'}
                                    </td>
                                    <td>{new Date(info.regDate).toLocaleDateString()}</td>
                                    <td>
                                        <button className="delete-button" onClick={() => handleDeleteTodo(info.id)}>
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                    {/* 몸무게 기록 공간 */}
                    <div className="record-container">
                        <h2>운동 및 몸무게 기록</h2>
                        <div className="record-input-section">
                            <label htmlFor="weight-input">몸무게 (kg): </label>
                            <input
                                type="number"
                                id="weight-input"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />

                            <label htmlFor="exercise-input">운동 시간 (시간): </label>
                            <input
                                type="number"
                                id="exercise-input"
                                value={exerciseHours}
                                onChange={(e) => setExerciseHours(e.target.value)}
                            />

                            <button type="button" className="add-button" onClick={handleAddRecord}>
                                기록 추가
                            </button>
                        </div>

                        <table className="record-table">
                            <thead>
                                <tr>
                                    <th>선택</th>
                                    <th>날짜</th>
                                    <th>몸무게 (kg)</th>
                                    <th>운동 시간 (시간)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.length === 0 ? (
                                    <tr>
                                        <td colSpan="4">기록이 없습니다</td>
                                    </tr>
                                ) : (
                                    records.map((record) => (
                                        <tr key={record.id}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRecords.includes(record.id)}
                                                    onChange={() => handleSelectRecord(record.id)}
                                                />
                                            </td>
                                            <td>{record.recordDate}</td>
                                            <td>{record.weight}</td>
                                            <td>{record.exerciseHours}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        <div className="button-container">
                            <button type="button" className="delete-button" onClick={handleDeleteSelectedRecords}>
                                기록 삭제
                            </button>
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
        </div>
    );

}
export default Todo;