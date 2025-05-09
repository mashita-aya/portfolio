import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer';
import { WorksContent } from './pages/Works/index';
import { WorkDetail } from './pages/Works/WorkDetail';
import { AboutContent } from './pages/About/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import React, { useState, useEffect } from 'react';
import { CONSTANTS } from './constants';
import logoIcon from './images/header_logo.svg';

function App() {
  const setIsOpen = useState(false)[1];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading_screen">
          <div className="loading_logo">           
            <img src={logoIcon} alt="logo" />
          </div>
          <h2 className="loading_title">portfolio site</h2>
        </div>
      )}
      <Router>
        <ScrollToTop />
        <Header setIsOpen={setIsOpen} />
        <Routes>
          <Route path={CONSTANTS.APP_NAME + '/'} element={<Home />} />
          <Route path='/about/content' element={<AboutContent />} />
          <Route path='/works/content' element={<WorksContent />} />
          <Route path='/workdetail/:id' element={<WorkDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
