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
        try {
            const response = await fetch('/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'mastercatch3@gmail.com',
                    subject: 'QNA 문의사항',
                    text: `Name: ${name}\nDepartment: ${department}\nEmail: ${email}\nQuestion: ${question}`,
                }),
            });

            if (response.ok) {
                alert('JH에게 성공적으로 이메일을 보냈습니다!');
            } else {
                alert('이메일을 보내지 못했습니다ㅠ_ㅠ 다시 시도해보세요..');
            }
        } catch (error) {
            alert('이메일 보내기 실패.. 서버 관리자에게 문의해주세요..');
        }

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
                <h2>QNA (궁금한 건 다 물어보세요^^)</h2>
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