import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import { Period } from './types/article';

const App: React.FC = () => {
  const [period, setPeriod] = useState<Period>(1);

  const handlePeriodChange = (newPeriod: Period) => {
    setPeriod(newPeriod);
  };

  return (
    <Router>
      <Layout period={period} onPeriodChange={handlePeriodChange}>
        <Routes>
          <Route path="/" element={<HomePage period={period} />} />
          <Route path="/article/:periodParam/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;