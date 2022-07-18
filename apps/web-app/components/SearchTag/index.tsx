import React, { useRef } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

import Button from '../Common/Button';
import { useSearchContext } from '../../context/search';

import useEventBus from '../../hooks/useEventBus';
import { filterTag } from '../assets/tag-data';

const SearchTag = () => {
  const { searchData, updateSearch } = useSearchContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refList = useRef<any>();
  useEventBus('scrollTopNft', () => {
    // refList.current?.scrollIntoView({
    //   behavior: 'smooth',
    // });

    scrollIntoView(refList.current, {
      scrollMode: 'if-needed',
      block: 'nearest',
      inline: 'nearest',
    });
  });

  const isSelected = (value: string) => {
    return (searchData.type || 'all') === value;
  };

  const handleChange = (val: string) => {
    updateSearch({ ...searchData, type: val });
  };

  return (
    <div ref={refList} className="flex flex-row flex-wrap gap-6 pb-4">
      {filterTag.map((item, index) => {
        return (
          <Button
            key={index}
            className="px-4 py-1 capitalize"
            second={!isSelected(item)}
            onClick={(evt) => handleChange(item)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default SearchTag;
