import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Menu from './Menu';
import MobileNav from './MobileNav';
import useAuth from '../../../hooks/useAuth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ConnectWalletModal from '../../modals/ConnectWalletModal';

const Nav = () => {
  const { walletConnected, removeWallet } = useAuth();
  const { height, width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
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
            {!walletConnected ? (
              <>
                {width > 480 ? (
                  <button
                    onClick={handleWalletModal}
                    className='nav-btn-primary'
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button
                    onClick={handleWalletModal}
                    className='nav-btn-primary compactBtn'
                  >
                    <img src='/assets/icons/ico.wallet.svg' alt='' />
                  </button>
                )}
              </>
            ) : (
              <>
                {width > 480 ? (
                  <button onClick={removeWallet} className='nav-btn-primary'>
                    Remove Wallet
                  </button>
                ) : (
                  <button
                    onClick={removeWallet}
                    className='nav-btn-primary compactBtn'
                  >
                    <img src='/assets/icons/ico.wallet.svg' alt='' />
                  </button>
                )}
              </>
            )}

            <button onClick={handleMenu} className='nav-btn-menu'>
              <img src='/assets/icons/nav/btn.menu.svg' alt='menuico' />
              {showMenu && <>{width > 890 ? <Menu /> : <MobileNav />}</>}
            </button>
          </div>
        </div>
      </header>
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
            backdrop-filter: blur(--blur2);
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
            backdrop-filter: blur(--blur2);
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

          .nav-btn-primary {
            padding: 15px 30px;
            margin-right: 20px;
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
