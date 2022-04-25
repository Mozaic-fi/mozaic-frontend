export const bondInfo = {
  treasuryBalance: 123152312.37,
  mozPrice: 213.95,
};

export const availableBonds = [
  {
    id: 1,
    bondName: 'USDC',
    icoSrc: ['/assets/icons/tokens/ico.token.usdc.svg'],
    price: 182.2,
    marketPrice: 164.7,
    roi: 0.25,
    tbv: 122324.3,
  },
  {
    id: 2,
    bondName: 'MOZ-AVAX LP',
    icoSrc: [
      '/assets/icons/tokens/ico.token.moz.svg',
      '/assets/icons/tokens/ico.token.avax.svg',
    ],
    price: 165.8,
    marketPrice: 164.7,
    roi: -0.17,
    tbv: 43234.5,
  },
];

export const myBond = [
  {
    id: 1,
    bondName: 'USDC',
    icoSrc: ['/assets/icons/tokens/ico.token.usdc.svg'],
    claimable: 0.0,
    pending: 22.4324,
    vestingTime: 3,
  },
  {
    id: 2,
    bondName: 'MOZ-AVAX LP',
    icoSrc: [
      '/assets/icons/tokens/ico.token.moz.svg',
      '/assets/icons/tokens/ico.token.avax.svg',
    ],
    claimable: 21.532,
    pending: 1.2342,
    vestingTime: 87,
  },
];
