import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout 컴포넌트
 * 헤더, 메인 콘텐츠(Outlet), 푸터를 포함하는 공통 레이아웃입니다.
 * 모든 페이지가 이 레이아웃을 공유합니다.
 */
const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
