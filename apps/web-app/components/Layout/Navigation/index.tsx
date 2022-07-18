import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import joinclass from 'joinclass';
import Button from '../../Common/Button';
import { navlink } from '../../assets/nav-data';

// icon
import LogoIcon from '../../../icon/LogoIcon';
import GlobalIcon from '../../../icon/GlobalIcon';
import ArrowDownIcon from '../../../icon/ArrowDownIcon';

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="navigation-menu flex flex-row justify-center items-center w-full select-none">
      <div className="w-10/12 flex flex-row justify-between">
        <div className="flex flex-row gap-8 items-center text-sm">
          <Link href="/" className="navigation-item">
            <a>
              <LogoIcon />
            </a>
          </Link>

          {navlink.map((item, index) => {
            return (
              <Link key={index} href={item.url}>
                <a
                  // href="#"
                  className={joinclass(
                    'navigation-item cursor-pointer flex flex-col uppercase',
                    router.pathname === item.key && 'navigation-selected'
                  )}
                  // onClick={() => {
                  // alert("abcd")
                  // router.push(item.url);
                  // }}
                >
                  <span className='w-full'>{item.name}</span>
                  <span className="navigation-border w-full"></span>
                </a>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row gap-8 items-center">
          <Button>Connect Wallet</Button>
          <div className="flex flex-row gap-2 items-center">
            <GlobalIcon />
            <ArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
