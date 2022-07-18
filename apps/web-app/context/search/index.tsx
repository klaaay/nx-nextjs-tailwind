import React, { useContext, useState } from 'react';

interface ISearchData {
  keySearch?: string;
  type?: string;
  tier: number | string; // from 1 - 10
  priceFrom?: number;
  priceTo?: number;
  theme: number | string;
  timeSort: number | string;
  priceSort: number | string;
}

const defaultSearch = {
  keySearch: '',
  type: 'all',
  tier: 0,
  priceFrom: 0.01,
  priceTo: 200,
  theme: '',
  timeSort: 0,
  priceSort: 0,
};

interface ISearchContextData {
  searchData: ISearchData;
  updateSearch?: (searchData: ISearchData) => void;
  clearSearch: () => void;
}

type Props = {
  children: React.ReactNode;
};

const Context = React.createContext({} as ISearchContextData);

const SearchContext: React.FC<Props> = (props) => {
  const [searchData, setSearchData] = useState<ISearchData>({
    ...defaultSearch,
  } as ISearchData);

  const clearSearch = () => {
    setSearchData({ ...defaultSearch });
  };

  return (
    <Context.Provider
      value={{ searchData, updateSearch: setSearchData, clearSearch }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useSearchContext = () => useContext(Context);
export default SearchContext;
