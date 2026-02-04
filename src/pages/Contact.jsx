import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

/**
 * Contact 컴포넌트
 * 연락처 정보를 표시하는 페이지입니다.
 */
const Contact = () => {
    return (
        <div className="contact-container page-container">
            <motion.section
                className="contact-content"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Contact</h2>
                <div className="contact-info">
                    <p>If you have any further questions, please feel free to contact us.</p>
                    <div className="email-box">
                        <strong>Email:</strong>
                        <a href="mailto:eden02laboratory@gmail.com">eden02laboratory@gmail.com</a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Contact;
