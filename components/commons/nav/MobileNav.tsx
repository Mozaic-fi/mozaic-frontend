import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItems, navItems } from '../../../data/NavData';

const MobileNav = () => {
  const router = useRouter();
  const isActive = (path: string) => {
    if (router.asPath === path) return 'active';
    return '';
  };

  return (
    <>
      <div className='menu-overlay'></div>
      <div className='mobile-nav bg-p'>
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

        <div className='menu-container'>
          {menuItems.map((item) => (
            <Link key={item.id} href={item.path}>
              <a target={'_blank'} className='menu-items bg-s'>
                <div className='iconholder-menu'>
                  <img src={item.icoSrc} alt='' />
                </div>
                <p>{item.name}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .mobile-nav {
            position: fixed;
            top: 96px;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            left: 0;
            height: calc(100vh - 96px);
            width: 100vw;
            border-radius: 0;
            border: none;
            box-sizing: border-box;
          }

          nav {
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          nav a {
            font-size: 1.8rem;
            margin: 0;
            padding: 1.25rem;
            width: 80%;
          }

          nav:last-child {
            margin-right: 0;
          }

          nav a:hover {
            background-color: #ffffff10;
          }

          .menu-container {
            height: min-content;
            width: 100vw;
            display: flex;
            flex-wrap: wrap;
            color: white;
            padding: 12px;
            gap: 20px;
            justify-content: center;
            margin-bottom: 20px;
          }

          .menu-items {
            display: flex;
            height: max-content;
            text-align: start;
            align-items: center;
            box-sizing: border-box;
            width: calc(50% - 30px);
            padding: 30px;
            border-radius: 10px;
          }

          .menu-items:hover {
            background-color: rgba(255, 255, 255, 0.164);
          }

          .menu-items p {
            display: inline-block;
            margin-left: 16px;
          }

          @media screen and (max-width: 580px) {
            .menu-container {
              padding: 0;
              gap: 10px;
            }

            .menu-items {
              box-sizing: border-box;
              margin: 0px 20px;
              padding: 0px 30px;
              width: 100%;
              height: 64px;
            }

            .menu-container:last-child {
              margin-bottom: 16px;
            }
          }
        `}
      </style>
    </>
  );
};

export default MobileNav;
