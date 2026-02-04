import React from 'react';
import { motion } from 'framer-motion';
import './LabMembers.css';

// 이미지 import
import imgEekClomo from '../assets/ovalProfile_eekclomo.png';
import imgWrenSpectre from '../assets/ovalProfile_WrenSpectre.png';


/**
 * LabMembers 컴포넌트
 * 팀원들과 프로젝트 그룹을 소개하는 페이지입니다.
 */
const LabMembers = () => {
    const members = [
        {
            id: 1,
            name: 'eek clomo',
            role: 'Beat Maker',
            location: 'Suwon, South Korea',
            img: imgEekClomo
        },
        {
            id: 2,
            name: 'Wren Spectre',
            role: 'Disc Jockey',
            location: 'London, United Kingdom',
            img: imgWrenSpectre
        }
    ];



    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="members-container page-container">

            {/* Individual Members Section */}
            <section className="members-section">
                <h2 className="section-title">Lab Members</h2>
                <div className="members-grid">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="member-card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                        >
                            <div className="img-wrapper">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <p className="location">{member.location}</p>
                        </motion.div>
                    ))}
                </div>
            </section>



        </div>
    );
};

export default LabMembers;
