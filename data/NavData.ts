type NavItem = { id: any; name: string; path: string };
type MenuItem = {
  id: any;
  name: string;
  path: string;
  icoSrc: string;
};

export const navItems: Array<NavItem> = [
  {
    id: 1,
    name: 'Products',
    path: '/',
  },
  {
    id: 2,
    name: 'Stake',
    path: '/coming-soon',
  },
  {
    id: 3,
    name: 'Bond',
    path: '/coming-soon',
  },
  {
    id: 4,
    name: 'Vote',
    path: '/coming-soon',
  },
];

export const menuItems: Array<MenuItem> = [
  {
    id: 1,
    name: 'Mozaic',
    path: 'https://mozaic.finance/',
    icoSrc: '/assets/icons/nav/navMenu/ico.menu.home.svg',
  },
  {
    id: 2,
    name: 'General Feedback',
    path: 'mailto:contact@mozaic.finance',
    icoSrc: '/assets/icons/nav/navMenu/ico.menu.feedback.svg',
  },
  {
    id: 3,
    name: 'Bug Report',
    path: 'mailto:contact@mozaic.finance',
    icoSrc: '/assets/icons/nav/navMenu/ico.menu.bug.svg',
  },
  {
    id: 4,
    name: 'User',
    path: 'https://docs.mozaic.finance/',
    icoSrc: '/assets/icons/nav/navMenu/ico.menu.user.svg',
  },
  {
    id: 5,
    name: 'Governance',
    path: 'https://docs.mozaic.finance/mozaic-protocol-1/governance',
    icoSrc: '/assets/icons/nav/navMenu/ico.menu.governance.svg',
  },
];
