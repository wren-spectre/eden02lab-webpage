import React from 'react';
import { motion } from 'framer-motion';
import './Overview.css';

/**
 * Overview 컴포넌트
 * eden02 lab.의 비전과 소개를 담고 있는 페이지입니다.
 */
const Overview = () => {
    return (
        <div className="overview-container page-container">
            <motion.section
                className="overview-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Overview</h2>
                <div className="overview-text">
                    <p>
                        <b>eden02 lab.</b> is a creative laboratory<br />
                        where we move freely between digital and analog, uncovering the hidden essence of brands.
                    </p>
                    <br />
                    <p>
                        Every project is an experiment, and every experiment is the seed of a new innovation.<br />
                        We want to create another paradise at the intersection of imagination and technology.
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default Overview;
