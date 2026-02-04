import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CaseStudies.css';

// Images
import imgLast from '../assets/albumCover_마지막재생목록.jpg';
import imgSystem from '../assets/albumCover_시스템재생목록.jpg';
import imgLateNight from '../assets/albumCover_늦밤재생목록.jpg';
import imgLondon from '../assets/albumCover_런던가을겨울.jpg';

const albums = [
    {
        id: 1,
        title: 'Last Playlist',
        year: '2024',
        type: 'Full Album',
        img: imgLast,
        artist: 'eek clomo',
        releaseDate: '2024.08.31.',
        tracks: [
            '1. All of the questions',
            '2. And answers',
            '3. Lead the way',
            '4. To new beginnings',
            '5. At the next level'
        ]
    },
    {
        id: 2,
        title: 'System Playlist',
        year: '2023',
        type: 'Full Album',
        img: imgSystem,
        artist: 'eek clomo',
        releaseDate: '2023.09.11.',
        tracks: [
            '1. System', '2. Web', '3. Tutorial', '4. Oracle', '5. Lounge for her',
            '6. Satisfaction', '7. Common sense', '8. Deus ex machina', '9. Format',
            '10. Recovery', '11. Ghost reporting', '12. Return null'
        ]
    },
    {
        id: 3,
        title: 'Late Night Playlist',
        year: '2018',
        type: 'Full Album',
        img: imgLateNight,
        artist: 'eek clomo',
        releaseDate: '2018.12.16.',
        tracks: [
            '1. Late Night Driving', '2. Go! Caffeine', '3. City hunter', '4. They said',
            '5. Seoul, winter', '6. Loving', '7. My camry', '8. Light, breath, fever'
        ]
    },
    {
        id: 4,
        title: 'London Fall Winter',
        year: '2015',
        type: 'Full Album',
        img: imgLondon,
        artist: 'eek clomo',
        releaseDate: '2015.02.17.',
        tracks: [
            '1. Heathrow', '2. Mind the gap', '3. Canary wharf', '4. Ugly woman',
            '5. Cheers', '6. Smog', '7. Trafalgar break', '8. Dawn',
            '9. On my way', '10. Saint pancras'
        ]
    }
];

/**
 * CaseStudies 컴포넌트
 * 앨범 리스트를 보여주며, 클릭 시 상세 정보를 펼쳐 보여줍니다.
 */
const CaseStudies = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="case-studies-container page-container">
            <h2 className="section-title">Case Studies</h2>
            <div className="results-grid">
                {albums.map((album) => (
                    <motion.div
                        key={album.id}
                        className={`result-item-card ${expandedId === album.id ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(album.id)}
                        layout
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <motion.img src={album.img} alt={album.title} layout />
                        <motion.div layout className="card-header">
                            <h3>{album.title}</h3>
                            <p className="meta">{album.year} | {album.type}</p>
                        </motion.div>

                        <AnimatePresence>
                            {expandedId === album.id && (
                                <motion.div
                                    className="result-detail"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <p><strong>Artist:</strong> {album.artist}</p>
                                    <p><strong>Release:</strong> {album.releaseDate}</p>
                                    <div className="track-list">
                                        <strong>Track List:</strong>
                                        <ul>
                                            {album.tracks.map((track, idx) => (
                                                <li key={idx}>{track}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
