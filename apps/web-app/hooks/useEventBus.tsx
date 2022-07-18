import React, { useEffect } from 'react';
import { $on, $off } from 'event-bus-e2z';

const useEventBus = (name: string, callback: (...arg: any[]) => void) => {
  useEffect(() => {
    $on(name, callback);
    return function () {
      $off(name, callback);
    };
  }, [name, callback]);
};

export default useEventBus;
