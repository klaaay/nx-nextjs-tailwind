import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

import JDIcon from './icon/DJ.png';
import Assassin from './icon/Assassin.png';
import BassketballGirl from './icon/BassketballGirl.png';
import MafiaEngland from './icon/MafiaEngland.png';
import NeonGuy from './icon/NeonGuy.png';

import { filterTag, themeData } from '../../components/assets/tag-data';
import { INFData } from '../../types/interface';

const NFT_Data = {
  JD: JDIcon,
  Assassin: Assassin,
  'Bassketball girl': BassketballGirl,
  'Mafia England': MafiaEngland,
  NeonGuy: NeonGuy,
};

const config: Config = {
  dictionaries: [names],
};

const newTag = [...filterTag].slice(1);

function getRandomType(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const avarUrl = [
  'https://avatars.dicebear.com/v2/female/461370be9d6800981785dff83e4d15a8.svg',
  'https://gravatar.com/avatar/8a18c3d4f80a635aabe3ebd2b19792fa?s=400&d=robohash&r=x',
  'https://robohash.org/461370be9d6800981785dff83e4d15a8?set=set4&bgset=&size=400x400',
];

export const makeTemplateData = () => {
  const total = randomIntFromInterval(300, 500);
  const list: INFData[] = [];

  for (let i = 0; i < total; i++) {
    const key: string = getRandomType(Object.keys(NFT_Data));

    list.push({
      id: uuid(),
      icon: NFT_Data[key],
      name: key,
      type: getRandomType(newTag),
      tier: randomIntFromInterval(1, 10),
      price: getRandomFloat(1, 200, 2),
      theme: getRandomType(themeData.slice(1)),
      time: randomIntFromInterval(2018, 2022),
      author: {
        name: uniqueNamesGenerator(config),
        avatar: getRandomType(avarUrl),
        online: Boolean(Math.round(Math.random())),
      },
    });
  }

  return list;
};
