import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack, IoAddOutline } from "react-icons/io5";

import '../../../static/css/common/reset.css';
import '../../../static/css/todo/todo.css';

const Todo = () => {
    // 1. header 토글 버튼 기능
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 2. TODOLIST 버튼 기능 + 몸무게 변수 선언
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [weight, setWeight] = useState('');
    const [exerciseHours, setExerciseHours] = useState('');
    const [records, setRecords] = useState([]);
    const [selectedRecords, setSelectedRecords] = useState([]);

    // 날짜 포멧
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 2-1. 할 일 추가
    const handleAddTodo = () => {
        if (inputValue.trim() === '') {
            alert('할 일을 입력해주세요ㅠ_ㅠ');
            return;
        }

        setTodos([...todos, inputValue]);
        setInputValue('');
    };

    // 2-2. 할 일 삭제
    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // 3. 몸무게 및 운동 기록
    const handleAddRecord = () => {
        if (weight && exerciseHours) {
            const newRecord = {
                weight,
                exerciseHours,
                date: getCurrentDate(),
                id: Date.now() // Unique ID for each record
            };
            setRecords([...records, newRecord]);
            setWeight('');
            setExerciseHours('');
        } else {
            alert("몸무게와 운동 시간을 입력하세요.");
        }
    };

    // 4. 체크박스 컬럼 (몸무게 기록 삭제)
    const handleSelectRecord = (id) => {
        setSelectedRecords(prev => {
            if (prev.includes(id)) {
                return prev.filter(recordId => recordId !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    const handleDeleteSelectedRecords = () => {
        setRecords(records.filter(record => !selectedRecords.includes(record.id)));
        setSelectedRecords([]);
    };

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
                                <th>할 일</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody className="todo-list">
                            {todos.length === 0 ? (
                                <tr>
                                    <td colSpan="2">할 일이 없습니다</td>
                                </tr>
                            ) : (
                                todos.map((todo, index) => (
                                    <tr key={index}>
                                        <td>{todo}</td>
                                        <td>
                                            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>
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
                                    records.map((record, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRecords.includes(record.id)}
                                                    onChange={() => handleSelectRecord(record.id)}
                                                />
                                            </td>
                                            <td>{record.date}</td>
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
        </div>
    );

}
export default Todo;