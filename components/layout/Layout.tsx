import Nav from '../commons/nav/Nav';
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { useNotification } from '../../hooks/useNotification';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const web3reactContext = useWeb3React();
  const dispatchNotification = useNotification();

  useEffect(() => {
    dispatchNotification({
      type: `${web3reactContext.account ? 'SUCCESS' : 'ERROR'}`,
      message: `${
        web3reactContext.account
          ? `Wallet ${web3reactContext.account} connected!`
          : 'Wallet disconnected!'
      }`,
    });
  }, [web3reactContext.account]);

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
            right: -20px;
            height: 120vh;
            width: 120vw;
            background-image: url('/assets/images/bg.img.primary.png');
            background-size: cover;
            background-position: center;
            z-index: -9999999999;
          }

          .page-content {
            margin-top: 96px;
            padding-bottom: 64px;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
