import React from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import joinclass from 'joinclass';
import EventBus from 'event-bus-e2z';

import { navlink } from '../../assets/nav-data';

interface INavigationLinksProps {
  showMobile?: boolean;
}
const NavigationLinks: React.FC<INavigationLinksProps> = ({ showMobile }) => {
  const router = useRouter();

  return (
    <ul className="flex flex-col lg:flex-row gap-8 lg:gap-2 list-none p-0">
      {navlink.map((item, index) => {
        return (
          <>
            <li
              key={index}
              className={joinclass(
                'navigation-item cursor-pointer px-2 py-2 lg:flex flex-col uppercase',
                router.pathname === item.key && 'navigation-selected px-4',
                !showMobile && 'hidden'
              )}
              onTouchEnd={() => {
                EventBus.$emit('toggleMenu', false);
                router.push(item.url);
              }}
              onClick={() => {
                EventBus.$emit('toggleMenu', false);
                router.push(item.url);
              }}
            >
              {/* <Link href={item.url}> */}
              <div className="flex flex-col">
                <span className="w-full">{item.name}</span>
                <span className="navigation-border w-full"></span>
              </div>
              {/* </Link> */}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default NavigationLinks;
