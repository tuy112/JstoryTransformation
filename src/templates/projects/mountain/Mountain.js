import React, { useState } from 'react';

import Header from "../../component/Header";
import Modal from '../mountain/components/Modal'; 
import MapComponent from '../mountain/components/MapComponent';

const Mountain = () => {
    // 산 목록을 상태로 관리
    const [mountains, setMountains] = useState([
        { name: '설악산', coordinates: [128.45, 38.10] },
        { name: '속리산', coordinates: [127.83, 36.54] },
        { name: '월악산', coordinates: [128.08, 36.83] },
        { name: '소백산', coordinates: [128.57, 36.90] },
        { name: '지리산', coordinates: [127.73, 35.37] },
        { name: '방태산', coordinates: [128.53, 37.97] },
        { name: '관악산', coordinates: [126.95, 37.44] },
        { name: '남산(경주)', coordinates: [129.32, 35.83] },
        { name: '구봉산(진안)', coordinates: [127.45, 35.78] },
        { name: '운장산', coordinates: [127.42, 35.90] },
        { name: '청계산', coordinates: [127.08, 37.43] },
        { name: '치악산', coordinates: [128.03, 37.40] },
        { name: '팔공산', coordinates: [128.71, 35.98] },
    ]);
    const [modalOpen, setModalOpen] = useState(false);

    const search = () => {
        alert('아직 미구현 기능입니다..');
    };

    const addStory = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleMountainAdded = (newMountain) => {
        setMountains(prevMountains => [...prevMountains, newMountain]);
    };

    return (
        <div id="wrap">
            {/* header */}
            <Header/>

            {/* main */}
            <section id="container" className="main">
                <div className="content mapWrap">
                    <h3>OPENLAYERS ({mountains.length}/100)</h3>
                    <MapComponent mountains={mountains} />
                </div>
                <div className="content storyBtn">
                    <input type="button" className="btn addBtn" value="산행추가" onClick={addStory} />
                </div>
            </section>


            {/* Modal Component */}
            <Modal 
                isOpen={modalOpen} 
                onClose={closeModal} 
                onMountainAdded={handleMountainAdded}
            />
        </div>
    );

}
export default Mountain;