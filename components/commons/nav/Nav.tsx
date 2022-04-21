import { useWeb3React } from '@web3-react/core';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Menu from './Menu';
import MobileNav from './MobileNav';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ConnectWalletModal from '../../modals/ConnectWalletModal';
import WalletDetailMenu from './WalletDetailMenu';

const Nav = () => {
  const web3reactContext = useWeb3React();

  const { height, width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWalletMenu, setShowWalletMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleWalletMenu = () => {
    setShowMenu(false);
    setShowWalletMenu(!showWalletMenu);
  };

  const handleMenu = () => {
    setShowWalletMenu(false);
    setShowMenu(!showMenu);
  };

  const handleWalletModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const isActive = (path: string) => {
    if (router.asPath === path) return 'active';
    return '';
  };

  const navItems: { id: any; name: string; path: string }[] = [
    {
      id: 1,
      name: 'Products',
      path: '/',
    },
    {
      id: 2,
      name: 'Stake',
      path: '/stake',
    },
    {
      id: 3,
      name: 'Bond',
      path: '/bond',
    },
    {
      id: 4,
      name: 'Vote',
      path: '/vote',
    },
  ];

  const OverlayBtn = ({ handleItem }: any): JSX.Element => {
    return (
      <div
        onClick={handleItem}
        style={{
          backgroundColor: '#00000010',
          position: 'absolute',
          zIndex: '9999999',
          top: 0,
          left: 0,
        }}
        className='w-f h-f'
      ></div>
    );
  };

  return (
    <>
      <div className='nav-bg'></div>
      <header className='nav-content-container'>
        <div className='nav-container'>
          <Link href='/'>
            <img
              src='/assets/icons/common/logo.mozaic.full.svg'
              alt='logo'
              className='logo'
            />
          </Link>
          {width > 890 && (
            <nav>
              {navItems.map((item) => (
                <Link key={item.id} href={item.path}>
                  <a
                    className={'nav-item ' + isActive(item.path)}
                    title={item.name}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          )}

          <div className='nav-btn-container'>
            {/* Connect Wallet Button & Menu */}

            {!web3reactContext.account ? (
              <button
                onClick={handleWalletModal}
                className={`nav-btn-primary ${
                  width < 480 && 'compactBtn df-c'
                }`}
              >
                {width > 480 ? (
                  'Connect Wallet'
                ) : (
                  <img
                    src='/assets/icons/nav/ico.connectwallet.compact.svg'
                    alt=''
                  />
                )}
              </button>
            ) : (
              <>
                <div
                  onClick={handleWalletMenu}
                  className={`nav-btn-primary ${
                    width < 480 && 'compactBtn df-c'
                  }`}
                >
                  {width > 480 ? (
                    <>
                      {`${web3reactContext.account.substring(0, 4)} 
                      ...${web3reactContext.account.substring(
                        web3reactContext.account.length,
                        web3reactContext.account.length - 5
                      )}`}
                    </>
                  ) : (
                    <img
                      src='/assets/icons/nav/ico.connectwallet.compact.svg'
                      alt='connect wallet'
                    />
                  )}
                  {showWalletMenu && (
                    <WalletDetailMenu setShowWalletMenu={setShowWalletMenu} />
                  )}
                </div>
              </>
            )}

            <button onClick={handleMenu} className='nav-btn-menu'>
              <img src='/assets/icons/nav/btn.menu.svg' alt='menuico' />
              {showMenu && <>{width > 890 ? <Menu /> : <MobileNav />}</>}
            </button>
          </div>
        </div>
      </header>
      {showMenu && <OverlayBtn handleItem={handleMenu} />}
      {showWalletMenu && <OverlayBtn handleItem={handleWalletMenu} />}
      {isOpen && <ConnectWalletModal setIsOpen={setIsOpen} />}
      <style jsx>
        {`
          .nav-bg {
            padding-left: 24px;
            padding-right: 24px;
            box-sizing: border-box;
            display: block;
            position: fixed;
            top: 0;
            z-index: 999999999998;
            height: 96px;
            width: 100vw;
            background: var(--bgSecondary);
            opacity: 0.6;
            backdrop-filter: var(--blur1);
          }

          .nav-content-container {
            padding-left: 24px;
            padding-right: 24px;
            box-sizing: border-box;
            display: block;
            position: fixed;
            top: 0;
            z-index: 999999999999;
            height: 96px;
            width: 100vw;
            backdrop-filter: var(--blur1);
          }

          nav {
            display: flex;
          }

          nav a {
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            color: white;
            text-decoration: none;
            margin-right: 44px;
            justify-self: center;
            transition: font-weight 0.25s ease;
          }

          nav a:last-child {
            margin-right: 0;
          }

          nav a:hover {
            font-weight: bold;
          }

          nav a::after {
            display: block;
            content: attr(title);
            font-weight: bold;
            overflow: hidden;
            visibility: hidden;
            height: 0;
          }

          nav .active {
            color: var(--primaryColor);
            font-weight: bold;
          }

          .nav-btn-menu {
            position: relative;
            height: 45px;
            width: 45px;
            font-size: 1em;
            font-weight: bold;
            background: var(--bgSecondary);
            border: 1px solid rgba(255, 255, 255, 0.205);
            border-radius: 55px;
            transition: all 0.25s ease-in-out;
            cursor: pointer;
            box-shadow: 10px #28242f;
          }

          .nav-btn-menu:hover {
            background-color: var(--bgPrimary);
          }

          .nav-btn-primary.compactBtn:hover > img {
            filter: invert(0%) sepia(4%) saturate(221%) hue-rotate(89deg)
              brightness(10%) contrast(73%);
          }

          .nav-btn-container {
            display: flex;
            align-items: center;
          }

          .nav-btn-primary {
            position: relative;
            padding: 15px 30px;
            margin-right: 10px;
            color: var(--primaryColor);
            font-size: 14px;
            font-weight: bold;
            background-color: transparent;
            border: 1px solid var(--primaryColor);
            border-radius: 55px;
            transition: transform 2s;
            cursor: pointer;
            transition: all 0.25s ease-in-out;
          }

          .nav-btn-primary:hover {
            background-color: var(--primaryColor);
            color: var(--bgPrimary);
          }

          .nav-container {
            display: flex;
            max-width: 1170px;
            justify-content: space-between;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            height: 100%;
          }

          .logo {
            cursor: pointer;
          }

          .compactBtn {
            padding: 0;
            height: 60px;
            width: 60px;
          }

          .compactBtn img {
            align-self: center;
            justify-self: center;
          }
        `}
      </style>
    </>
  );
};

export default Nav;
