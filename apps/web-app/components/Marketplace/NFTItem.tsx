import React from 'react';
import Image from 'next/image';
import FlexCenter from '../Common/FlexCenter';

import EtherumIcon from '../../icon/EtherumIcon';
import HeartIcon from '../../icon/HeartIcon';
import { INFData } from '../../types/interface';
import { themeColor } from '../assets/tag-data';
import joinclass from 'joinclass';
import { useSearchContext } from '../../context/search/index';

interface INFTItemProps {
  item: INFData;
}

const NFTItem: React.FC<INFTItemProps> = ({ item }) => {
  const { searchData, updateSearch } = useSearchContext();

  return (
    <div
      key={item.id}
      className="cart-item flex flex-col items-center p-2 py-4 gap-4 text-white"
    >
      <div
        className={joinclass(
          'cart-item-picture flex flex-col',
          themeColor[item.theme]
        )}
      >
        <div className="flex justify-between items-center px-3 py-2">
          <FlexCenter
            className="cursor-pointer hover:scale-110 cart-tag px-3 py-1 rounded capitalize"
            onClick={() => {
              updateSearch({ ...searchData, type: item.type });
            }}
          >
            {item.type}
          </FlexCenter>
          <HeartIcon />
        </div>
        <div className="flex justify-center w-full h-full">
          <span className="opacity-100 hover:opacity-80">
            <Image alt={item.name} src={item.icon} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-start gap-4">
        <div className="flex justify-between w-full">
          <div className="">{item.name}</div>
          <div className="flex justify-center items-baseline gap-2">
            <EtherumIcon />
            <div>{item.price} ETH</div>
          </div>
        </div>

        <FlexCenter className="text-xs gap-2">
          <div>
            <img
              style={{ border: '1px solid' }}
              alt="Avatar"
              className="w-8 h-8 rounded-full border-solid"
              src={item.author.avatar}
            />
          </div>
          <div>{item.author.name}</div>
        </FlexCenter>
      </div>
    </div>
  );
};

export default NFTItem;
