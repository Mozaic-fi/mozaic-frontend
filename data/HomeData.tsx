import React from 'react';

export type Product = {
  id: any;
  name: string;
  icoSrc: string;
  position: number;
  currentDeposit: number;
  maxCapacity: number;
  currentProjectYield: number;
  priceChange: number;
  currency: string;
  tokens: {
    id: any;
    name: string;
    icoSrc: string;
  }[];
};

export let products = [
  {
    id: 1,
    name: 'Avalanche Majors',
    icoSrc: '/assets/icons/products/ico.avalanchemajor.svg',
    position: 29,
    currentDeposit: 3946.31,
    maxCapacity: 15500.0,
    currentProjectYield: 11.56,
    priceChange: 2.8,
    currency: 'USDC',
    tokens: [
      {
        id: 1,
        name: 'LINK',
        icoSrc: '/assets/icons/tokens/ico.token.link.svg',
      },
      {
        id: 2,
        name: 'AVAX',
        icoSrc: '/assets/icons/tokens/ico.token.avax.svg',
      },
      {
        id: 3,
        name: 'WBTC',
        icoSrc: '/assets/icons/tokens/ico.token.wbtc.svg',
      },
      {
        id: 4,
        name: 'WETH',
        icoSrc: '/assets/icons/tokens/ico.token.weth.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'T-YVUSDC-P-ETH',
    icoSrc: '/assets/icons/products/ico.T-YVUSDC- P-ETH.svg',
    position: 12,
    currentDeposit: 6632.31,
    maxCapacity: 12240.0,
    currentProjectYield: 27.53,
    priceChange: 1.6,
    currency: 'USDC',
    tokens: [
      {
        id: 1,
        name: 'LINK',
        icoSrc: '/assets/icons/tokens/ico.token.link.svg',
      },
      {
        id: 2,
        name: 'AVAX',
        icoSrc: '/assets/icons/tokens/ico.token.avax.svg',
      },
      {
        id: 3,
        name: 'WBTC',
        icoSrc: '/assets/icons/tokens/ico.token.wbtc.svg',
      },
      {
        id: 4,
        name: 'WETH',
        icoSrc: '/assets/icons/tokens/ico.token.weth.svg',
      },
    ],
  },
  {
    id: 3,
    name: 'T-ETH-C',
    icoSrc: '/assets/icons/products/ico.T-ETH-C.svg',
    position: 20,
    currentDeposit: 4632.31,
    maxCapacity: 13500.0,
    currentProjectYield: 21.34,
    priceChange: 1.3,
    currency: 'USDC',
    tokens: [
      {
        id: 1,
        name: 'LINK',
        icoSrc: '/assets/icons/tokens/ico.token.link.svg',
      },
      {
        id: 2,
        name: 'AVAX',
        icoSrc: '/assets/icons/tokens/ico.token.avax.svg',
      },
      {
        id: 3,
        name: 'WBTC',
        icoSrc: '/assets/icons/tokens/ico.token.wbtc.svg',
      },
      {
        id: 4,
        name: 'WETH',
        icoSrc: '/assets/icons/tokens/ico.token.weth.svg',
      },
    ],
  },
];

export default function HomeData() {}
