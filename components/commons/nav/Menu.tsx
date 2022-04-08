import Link from 'next/link';

const Menu = () => {
  interface MenuItem {
    id: any;
    name: string;
    path: string;
    icoSrc: string;
  }

  const menuItems: Array<MenuItem> = [
    {
      id: 1,
      name: 'Mozaic',
      path: '/home',
      icoSrc: '/assets/icons/nav/navMenu/ico.menu.home.svg',
    },
    {
      id: 2,
      name: 'General Feedback',
      path: '/feedback',
      icoSrc: '/assets/icons/nav/navMenu/ico.menu.feedback.svg',
    },
    {
      id: 3,
      name: 'Bug Report',
      path: '/report',
      icoSrc: '/assets/icons/nav/navMenu/ico.menu.bug.svg',
    },
    {
      id: 4,
      name: 'User',
      path: '/user',
      icoSrc: '/assets/icons/nav/navMenu/ico.menu.user.svg',
    },
    {
      id: 5,
      name: 'Governance',
      path: '/governance',
      icoSrc: '/assets/icons/nav/navMenu/ico.menu.governance.svg',
    },
  ];

  return (
    <>
      <div className='menu-overlay'></div>
      <div className='menu-container bg-card-primary glow blur-2'>
        {menuItems.map((item) => (
          <Link key={item.id} href={item.path}>
            <div className='menu-items'>
              <div className='iconholder-menu'>
                <img src={item.icoSrc} alt='' />
              </div>
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          .menu-container {
            display: flex;
            flex-direction: column;
            width: 250px;
            align-items: flex-start;
            justify-content: start;
            margin-top: 36px;
            position: absolute;
            border-radius: 15px;
            top: 300;
            right: 0;
            padding: 12px;
            color: white;
            font-weight: 400;
          }

          .menu-items {
            box-sizing: border-box;
            width: 100%;
            padding: 12px;
            display: flex;
            justify-content: flex-start;
            border-radius: 10px;
            transition: all 0.25s ease;
          }

          .menu-items:hover {
            background-color: rgba(255, 255, 255, 0.164);
          }

          .menu-items p {
            margin-left: 16px;
          }
        `}
      </style>
    </>
  );
};

export default Menu;
