import React, { useRef, useState } from 'react';
import { Hooks } from '@delpi/common';

import useEventBus from '../../../hooks/useEventBus';
import NavigationLinks from './NavigationLinks';


const MobileNavigation = () => {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refMenu = useRef<any>(null);
  useEventBus('toggleMenu', (value) => setShow(value || !show));
  Hooks.useOutsideClick(refMenu, () => setShow(false));

  return (
    <div
      ref={refMenu}
      className="fixed left-0 w-4/6 bg-lavendarBlue h-full z-50 py-6 px-2 transition ease-in-out duration-500"
      style={{
        transform: show ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <NavigationLinks showMobile />
    </div>
  );
};

export default MobileNavigation;
