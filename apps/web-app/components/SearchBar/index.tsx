import React from 'react';
import Slider from 'rc-slider';
import SearchBox from './SearchBox';
import SearchDropdown from './SearchDropdown';
import ResetIcon from '../../icon/ResetIcon';
import { useSearchContext } from '../../context/search';
import EventBus from 'event-bus-e2z';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const SearchBar = () => {
  const { searchData, updateSearch, clearSearch } = useSearchContext();

  return (
    <div className="search-container w-3/12 flex flex-col gap-6">
      <SearchBox />

      <div className="flex flex-col gap-1 mt-3 mb-2 text-thirdColor">
        <div className="text-base uppercase">price</div>
        <Range
          className="go-slider"
          marks={{
            0.01: `0 ETH`,
            200: `200 ETH`,
          }}
          min={0.01}
          max={200.01}
          value={[searchData.priceFrom, searchData.priceTo]}
          tipFormatter={(value: number) => `${value} ETH`}
          tipProps={{
            placement: 'top',
            // visible: true,
          }}
          onChange={([priceFrom, priceTo]) => {
            updateSearch({ ...searchData, priceFrom, priceTo });
          }}
        />
      </div>

      <SearchDropdown
        value={searchData.tier || 0}
        label="tier"
        onChange={(val) => {
          updateSearch({ ...searchData, tier: val });
        }}
      />

      <SearchDropdown
        value={searchData.theme}
        flatObject
        label="theme"
        onChange={(val) => {
          updateSearch({ ...searchData, theme: val });
        }}
      />

      <SearchDropdown
        value={searchData.timeSort}
        label="time"
        onChange={(val) => {
          updateSearch({ ...searchData, timeSort: val });
        }}
      />

      <SearchDropdown
        value={searchData.priceSort || -1}
        label="price"
        onChange={(val) => {
          updateSearch({ ...searchData, priceSort: val });
        }}
      />

      <div>
        <div
          className="flex flex-row gap-2 cursor-pointer select-none"
          onClick={() => {
            clearSearch();
            EventBus.$emit('scrollTopNft');
          }}
        >
          <div>
            <ResetIcon />
          </div>
          <div>Reset filter</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
