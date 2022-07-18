import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ILayout {
  children: React.ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="page-container flex flex-col justify-center">
        <div className="w-10/12 pt-20 pb-10 self-center">{children}</div>
        <div className="page-container-footer w-full"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
