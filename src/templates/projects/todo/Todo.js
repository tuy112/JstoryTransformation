import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import TilModal from "../../component/TilModal";

const Todo = (() => {
    const navigate = useNavigate();
    const todos = [
        {
            id:"1",
            title:"오라클 공부",
            summary:"쿼리 짜는 연습",
            date:"2025-04-02"
        }
    ]; // TIL 임시 데이터

    return (
        <div id="wrap">
            <Header />

            <section id="container" className="main">
                <div className="todo-container" id="todoList">
                    <div className="record-container">
                        <div className="title-section">
                            <h1>지금까지 쓴 TIL / WIL 모음</h1>
                            <div className="btn-group">
                                <button className="add-btn" onClick={() => navigate("/til")}>TIL 추가</button>
                                <button className="add-btn" onClick={() => navigate("/til")}>WIL 추가</button>
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
                                {todos.length > 0 ? (
                                    todos.map((todo, index) => (
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

                    <div className="record-container">
                        <div className="title-section">
                            <h1>운동 + 몸무게 기록</h1>
                            <div className="btn-group">
                                <button className="add-btn" onClick={() => navigate("/til")}>TIL 추가</button>
                                <button className="add-btn" onClick={() => navigate("/til")}>WIL 추가</button>
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
                                {todos.length > 0 ? (
                                    todos.map((todo, index) => (
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