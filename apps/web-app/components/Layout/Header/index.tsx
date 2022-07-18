import React from 'react';
import Navigation from '../Navigation';

import TopFeature from '../../Marketplace/TopFeature';

const Header = () => {
  return (
    <div className="page-header relative flex flex-col justify-between">
      <Navigation />

      <div className="page-header-banner flex relative flex-col justify-between">
        <div className="header-logo flex flex-row">
          <div className="flex flex-col gap-8">
            <div className="header-banner-new"></div>
            <div className="header-banner-shop-now"></div>
          </div>
          <div className="banner-arrival relative mt-12">
            <div className="header-banner-arrival1"></div>
            <div className="header-banner-arrival2"></div>
          </div>
        </div>
      </div>

      <div className="header-top-rate relative">
        <TopFeature />
      </div>
    </div>
  );
};

export default Header;
