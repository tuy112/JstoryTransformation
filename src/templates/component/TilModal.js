import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TilModal = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [keyword, setKeyword] = useState("");
    const [type, setType] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">TIL / WIL 추가</h2>
                <label>제목</label>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="제목을 입력하세요"
                    value={title}
                />
                <label>종류</label>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="TIL인지? WIL인지?"
                    value={type}
                />
                <label>요약 내용</label>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="공부한 내용의 키워드를 입력하세요"
                    value={keyword}
                />
                <label>공부한 내용</label>
                <textarea
                    className="modal-textarea"
                    placeholder="오늘 공부한 내용은?"
                    value={content}
                    rows="5"
                />
                <div className="modal-btn-wrap">
                    <button className="common-btn" onClick={() => alert("저장 완료!")}>
                        저장
                    </button>
                    <button className="common-btn close-btn" onClick={() => navigate("/todo")}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TilModal;