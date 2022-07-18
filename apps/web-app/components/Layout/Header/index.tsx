import React from 'react';
import Navigation from '../Navigation';

import TopFeature from '../../Marketplace/TopFeature';

const Header = () => {
  return (
    <div className="page-header relative flex flex-col justify-between">
      <Navigation />

      <div className="page-header-banner flex relative flex-col">
        <div className="header-logo flex self-center pt-14 flex-row flex-wrap w-10/12">
          <div className="flex flex-col gap-8">
            <div className="header-banner-new"></div>
            <div className="header-banner-shop-now"></div>
          </div>
          <div className="banner-arrival relative mt-12 lg:mt-0">
            <div className="header-banner-arrival1"></div>
            <div className="header-banner-arrival2"></div>
          </div>
        </div>
      </div>

      <div className="header-top-rate">
        <TopFeature />
      </div>
    </div>
  );
};

export default Header;
