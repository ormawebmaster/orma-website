
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JobDetailPage from './pages/JobDetailPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/job/:id" element={<JobDetailPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
