import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

/**
 * Header 컴포넌트
 * 사이트 상단 네비게이션과 로고를 포함합니다.
 * 반응형 디자인과 스크롤에 따른 스타일 변화를 처리합니다.
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 스크롤 이벤트 감지하여 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* 로고 */}
        <Link to="/" className="logo">
          eden02 lab.
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/overview" className={location.pathname === '/overview' ? 'active' : ''}>Overview</Link></li>
            <li><Link to="/lab-members" className={location.pathname === '/lab-members' ? 'active' : ''}>Lab Members</Link></li>
            <li><Link to="/research-area" className={location.pathname === '/research-area' ? 'active' : ''}>Research Area</Link></li>
            <li><Link to="/case-studies" className={location.pathname === '/case-studies' ? 'active' : ''}>Case Studies</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color={isScrolled ? '#fff' : '#fff'} />}
        </button>
      </div>

      {/* 모바일 네비게이션 오버레이 */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/overview">Overview</Link></li>
              <li><Link to="/lab-members">Lab Members</Link></li>
              <li><Link to="/research-area">Research Area</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
