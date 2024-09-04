import React, { useState } from 'react';
import Modal from 'react-modal';

import '../../static/css/common/reset.css';
import '../../static/css/qna/qna.css';

const QnaModal = ({ isOpen, onRequestClose}) => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 이메일 전송로 내용 전달
        await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'dha3a05@daum.net',
                subject: 'QNA 문의사항',
                text: `Name: ${name}\nDepartment: ${department}\nEmail: ${email}\nQuestion: ${question}`,
            }),
        });

        onRequestClose(); // 모달 닫기
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="QNA Modal"
            ariaHideApp={false}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-header">
                <h2>문의사항</h2>
                <button
                    className="close-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log("닫기 버튼 클릭됨");
                        onRequestClose();
                    }}
                >×</button>
            </div>
            <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                <label>
                    이름:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    소속:
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                </label>
                <br />
                <label>
                    이메일:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    문의사항:
                    <textarea value={question} onChange={(e) => setQuestion(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default QnaModal;