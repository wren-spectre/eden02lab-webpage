import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

/**
 * Home 컴포넌트
 * 사이트의 메인 대문 페이지입니다.
 * 히어로 섹션과 간단한 소개를 포함합니다.
 */
const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <section id="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* 타이틀 */}
                    <h2>eden + 02 = ?</h2>

                    {/* 소개 문구 */}
                    <p>
                        <i>eden02 lab.</i> strives to created another paradise in various fields.
                    </p>

                    {/* 자세히 보기 버튼 */}
                    <button
                        id="scrollToAboutBtn"
                        onClick={() => navigate('/overview')}
                    >
                        Learn More
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
