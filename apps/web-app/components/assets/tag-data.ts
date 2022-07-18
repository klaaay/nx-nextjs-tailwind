export const filterTag = [
  'all',
  'upper body',
  'lower body',
  'hat',
  'shoes',
  'accessory',
  'legendary',
  'mythic',
  'epic',
  'rare',
  'common',
];

export const themeData = [
  "All",
  'Halloween',
  'Noel',
  'New Year',
  'React Spring',
  'Del.K',
];

// fake random theme
export const themeColor = {
  'Halloween': 'color-type-1',
  'Noel': 'color-type-2',
  'New Year': 'color-type-3',
  'React Spring': 'color-type-4',
  'Del.K': 'color-type-5',
}

export const priceData = [
  {
    label: 'Low to high',
    value: 1,
  },
  {
    label: 'High to low',
    value: -1,
  },
];

export const timeData = [
  {
    label: 'Lastest',
    value: -1,
  },
  {
    label: 'Oldest',
    value: 1,
  },
];

export const tierData = () => {
  const ts = [
    {
      label: 'All',
      value: 0,
    },
  ];
  for (let i = 1; i <= 10; i++) {
    ts.push({
      label: `Tier ${i}`,
      value: i,
    });
  }
  return ts;
};
