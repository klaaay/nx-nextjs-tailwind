import React from 'react';
import Dropdown from 'react-dropdown-z';
import { priceData, themeData, timeData, tierData } from '../assets/tag-data';

interface ISearchDropdownProps {
  label: string;
  value: string | number;
  flatObject?: boolean;
  onChange: (value: string | number) => void;
}

const fakeTimeData = () => {
  const times = [];
  for (let i = 2018; i <= 2022; i++) {
    times.push({
      label: i,
      value: i,
    });
  }
  return [...timeData, ...times.reverse()];
};

const listOptions = {
  tier: tierData(),
  theme: themeData,
  time: fakeTimeData(),
  price: priceData,
};

const SearchDropdown: React.FC<ISearchDropdownProps> = ({
  label,
  value,
  flatObject,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 text-thirdColor">
      <div className="text-base uppercase">{label}</div>
      {flatObject ? (
        <Dropdown
          perfectScroll
          value={value}
          options={listOptions[label] || []}
          onSelection={onChange}
        />
      ) : (
        <Dropdown
          perfectScroll
          keyName="value"
          labelName="label"
          value={value}
          options={listOptions[label] || []}
          onSelection={onChange}
        />
      )}
    </div>
  );
};

export default SearchDropdown;
