import Nav from '../commons/nav/Nav';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <div className='page-content'>{children}</div>
      <div className='bg-overlay'></div>
      <div className='bg-img'></div>

      <style jsx>
        {`
          .bg-img {
            position: fixed;
            top: -0px;
            left: -20px;
            height: 105vh;
            width: 105vw;
            background-image: url('/assets/images/bg.img.primary.png');
            background-size: cover;
            z-index: -9999999999;
          }

          .page-content {
            margin-top: 96px;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
