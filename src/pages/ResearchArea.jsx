import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './ResearchArea.css';

// Images
import imgPulse from '../assets/simpleImage_Pulse.png';
import imgMirror from '../assets/simpleImage_Mirror.png';
import imgGear from '../assets/simpleImage_Gear.png';

const researchData = {
    pulses: {
        id: 'pulses',
        title: 'pulses.',
        desc: 'Creating content such as video, music, and more.',
        detailTitle: 'Content Creation',
        detailDesc: 'pulses. is the heartbeat of our creative output.\nWe produce rhythm, visual narratives, and auditory experiences that resonate with the audience.',
        img: imgPulse
    },
    mirrors: {
        id: 'mirrors',
        title: 'mirrors.',
        desc: 'Delivering solutions powered by 3D technology.',
        detailTitle: '3D Solutions',
        detailDesc: 'mirrors. reflects reality into the digital realm.\nUsing advanced 3D scanning and modeling, we bridge the gap between physical objects and virtual spaces.',
        img: imgMirror
    },
    gears: {
        id: 'gears',
        title: 'gears.',
        desc: 'Creating merchandise related to eden02 lab.',
        detailTitle: 'Physical Manifestations',
        detailDesc: 'Ideas need form.\ngears. transforms eden02 lab\'s digital DNA into tactile experiences,\ncreating merchandise that serves as artifacts of our ongoing experiments.',
        img: imgGear
    }
};

/**
 * ResearchArea 컴포넌트
 * 연구 분야 리스트를 보여주거나, 특정 ID의 상세 내용을 보여줍니다.
 */
const ResearchArea = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // 상세 페이지 뷰
    if (id && researchData[id]) {
        const item = researchData[id];
        return (
            <div className="research-container page-container">
                <motion.div
                    className="research-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>{item.title}</h2>
                    <div className="detail-content">
                        {/* <img src={item.img} alt={item.title} className="detail-img" /> */}
                        <h3>{item.detailTitle}</h3>
                        <p>{item.detailDesc.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
                        <button className="back-button" onClick={() => navigate('/research-area')}>
                            Back to Research Area
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // 메인 리스트 뷰
    return (
        <div className="research-container page-container">
            <h2 className="section-title">Research Area</h2>
            <div className="brand-grid">
                {Object.values(researchData).map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="brand-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br/>') }}></p>
                        <Link to={`/research-area/${item.id}`} className="brand-detail-btn">
                            View Details
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ResearchArea;
