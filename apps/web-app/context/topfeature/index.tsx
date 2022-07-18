import React, { useContext, useState } from 'react';
import { INFData } from '../../types/interface';

interface ITopFeatureContextData {
  topData: INFData[];
  setTopData: (topData: INFData[]) => void;
}

type Props = {
  children: React.ReactNode;
};

const Context = React.createContext({} as ITopFeatureContextData);

const TopFeatureContext: React.FC<Props> = ({ children }) => {
  const [topData, setTopData] = useState<INFData[]>([]);
  return (
    <Context.Provider value={{ topData, setTopData }}>
      {children}
    </Context.Provider>
  );
};

export const useTopFeatureContext = () => useContext(Context);
export default TopFeatureContext;
