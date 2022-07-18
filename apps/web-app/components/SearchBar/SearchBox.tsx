import React from 'react';
import { Input } from '../Common/Input';

import SearchIcon from '../../icon/SearchIcon';
import { useSearchContext } from '../../context/search';

const SearchBox = () => {
  const { searchData, updateSearch } = useSearchContext();
  return (
    <Input
      placeholder="Search"
      value={searchData.keySearch}
      onChange={(evt) => {
        updateSearch({ ...searchData, keySearch: evt.target.value });
      }}
    >
      <SearchIcon />
    </Input>
  );
};

export default SearchBox;
