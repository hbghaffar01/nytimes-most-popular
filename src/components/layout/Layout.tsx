import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Period } from '../../types/article';

interface LayoutProps {
  children: ReactNode;
  period: Period;
  onPeriodChange: (period: Period) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, period, onPeriodChange }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header period={period} onPeriodChange={onPeriodChange} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;