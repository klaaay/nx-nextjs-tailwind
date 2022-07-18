import React from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import EventBus from 'event-bus-e2z';
import Button from '../../Common/Button';

// icon
import LogoIcon from '../../../icon/LogoIcon';
import GlobalIcon from '../../../icon/GlobalIcon';
import ArrowDownIcon from '../../../icon/ArrowDownIcon';
import NavigationLinks from './NavigationLinks';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  return (
    <>
      <div className="navigation-menu flex flex-row justify-center items-center w-full select-none">
        <div className="w-10/12 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-8 items-center text-sm">
            <FaBars
              className="cursor-pointer block lg:hidden select-none"
              onClick={() => EventBus.$emit('toggleMenu')}
            />
            <Link href="/" className="navigation-item">
              <a>
                <LogoIcon />
              </a>
            </Link>
            <NavigationLinks />
          </div>

          <div className="flex flex-row gap-6 items-center">
            <Button className="hidden lg:flex">Connect Wallet</Button>
            <div className="flex flex-row gap-2 items-center">
              <GlobalIcon />
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>

      <MobileNavigation />
    </>
  );
};

export default Navigation;
