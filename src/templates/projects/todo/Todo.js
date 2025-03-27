import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import TilModal from "../../component/TilModal";

import '../../../static/css/common/reset.css';
import '../../../static/css/todo/todo.css';

const Todo = (() => {
    const navigate = useNavigate();
    const todoList = [];

    return (
        <div id="wrap">
            <Header />

            <section id="container" className="main">
                <div className="todo-container" id="todolist">
                    <div className="record-container">
                        <div className="title-section">
                            <h1>지금까지 쓴 TIL / WIL 모음</h1>
                            <div className="button-group">
                                <button className="add-button" onClick={() => navigate("/til")}>TIL 추가</button>
                                <button className="add-button" onClick={() => navigate("/til")}>WIL 추가</button>
                            </div>
                        </div>

                        <table className="todo-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>제목</th>
                                    <th>요약 내용</th>
                                    <th>등록일</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody className="todo-list">
                                {todoList.length > 0 ? (
                                    todoList.map((todo, index) => (
                                        <tr key={index}>
                                            <td>{todo.id}</td>
                                            <td>{todo.title}</td>
                                            <td>{todo.summary}</td>
                                            <td>{todo.date}</td>
                                            <td>
                                                <button className="delete-btn">삭제</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: "center" }}>공부 기록이 없습니다. 공부좀 해..</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
});

export default Todo;