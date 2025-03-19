import React from "react";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

import '../../../static/css/common/reset.css';
import '../../../static/css/todo/todo.css';
import 'react-calendar/dist/Calendar.css';

const Todo = (() => {


    return (
        <div id="wrap">
            <Header />

            <section id="container" className="main">
                {/* todoList */}
                <div className="todo-container" id="todolist">
                    <div className="record-container">
                        <div className="title-section">
                            <h1>todolist</h1>
                        </div>
                        <div className="input-section">
                            <form>
                                <div className="input-wrapper">
                                    <label htmlFor="todo-input">오늘 할 일!!</label>
                                    <input
                                        type="text"
                                        id="todo-input"
                                        className="todo-input"
                                    />
                                    <button type="button" className="add-button">+</button>
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
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
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