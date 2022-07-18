import React from 'react';
import Image from 'next/image';
import { useTopFeatureContext } from '../../context/topfeature';

// import DJ from '../../assets/data/icon/DJ.png';
import { INFData } from '../../types/interface';

interface ITopFeatureItemProps {
  topItem: INFData;
}
export const TopFeatureItem: React.FC<ITopFeatureItemProps> = ({ topItem }) => {
  return (
    <div className="flex flex-col justify-end py-6 gap-6">
      <div className="top-bg-item relative">
        <div className="absolute bottom-0">
          {topItem?.icon && (
            <Image alt="" src={topItem?.icon} width="200px" height="168px" />
          )}
        </div>
      </div>
      <div className="text-center">{topItem.name}</div>
    </div>
  );
};

export const TopHighItem: React.FC<ITopFeatureItemProps> = ({ topItem }) => {
  return (
    <div className="relative">
      <div className="bg-top absolute bottom-0 right-0">
        {topItem?.icon && (
          <Image alt="" src={topItem?.icon} width="470px" height="655px" />
        )}
      </div>
      <div className="bg-top-name absolute flex items-center font-bold text-7xl bottom-6 right-4">
        <span className="m-12">{topItem?.name}</span>
      </div>
    </div>
  );
};

const TopFeature = () => {
  const { topData } = useTopFeatureContext();

  const top4 = (topData || []).slice(1);
  return (
    <>
      <div className="relative ml-32 flex h-full gap-10 uppercase font-bold">
        {top4.map((item, index) => {
          return <TopFeatureItem key={index} topItem={item} />;
        })}
      </div>
      <TopHighItem topItem={topData[0]} />
    </>
  );
};

export default TopFeature;
