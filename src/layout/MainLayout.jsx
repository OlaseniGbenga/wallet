import FooterNav from '@/components/FooterNav';
import HeaderNav from '@/components/HeaderNav';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <main>
      <HeaderNav />
      {children}
      <FooterNav />
    </main>
  );
};

export default MainLayout;