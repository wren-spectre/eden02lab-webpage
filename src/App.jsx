import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Overview from './pages/Overview';
import LabMembers from './pages/LabMembers';
import ResearchArea from './pages/ResearchArea';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

/**
 * App 컴포넌트
 * 라우팅을 정의하고 전체 앱의 구조를 잡습니다.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="overview" element={<Overview />} />
        <Route path="lab-members" element={<LabMembers />} />
        <Route path="research-area" element={<ResearchArea />} />
        <Route path="research-area/:id" element={<ResearchArea />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div style={{ padding: '50px', textAlign: 'center' }}>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
