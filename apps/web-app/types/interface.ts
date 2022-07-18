// split or define many

export interface IAuthor {
  name: string;
  avatar: string;
  online: boolean;
}

export interface INFData {
  id: string | number;
  icon: string;
  name: string;
  type: string;
  tier: number; // from 1 - 10
  price: number;
  theme: string | number;
  time: number; // 2018 - 2022
  author: IAuthor;
}
