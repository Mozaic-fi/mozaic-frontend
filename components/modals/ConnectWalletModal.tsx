import { useWeb3React } from '@web3-react/core';
import {
  injected,
  walletconnect,
  resetWalletConnector,
} from '../../helpers/connectors';
import useAuth from '../../hooks/useAuth';
import Modal from './Modal';

const ConnectWalletModal = ({ setIsOpen }: any) => {
  const { walletConnected, addWallet, removeWallet } = useAuth();
  const web3reactContext = useWeb3React();

  //web3react context
  const checkInfo = async () => {
    try {
      console.log('web3reactContext');
      console.log(web3reactContext);
    } catch (error) {
      console.log(error);
    }
  };

  //web3react metamask
  const connectMetamask = async () => {
    try {
      await web3reactContext.activate(injected).then(() => {
        setIsOpen(false);
        addWallet();
      });
      checkInfo();
    } catch (error) {
      console.log(error);
    }
  };

  //web3react walletconnect
  const connectWalletConnect = async () => {
    try {
      resetWalletConnector(walletconnect);
      await web3reactContext.activate(walletconnect).then(() => {
        addWallet();
        setIsOpen(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleConnectWallet = (wallet: number): void => {
    if (wallet === 0) {
      connectMetamask();
    }
    if (wallet === 1) {
      connectWalletConnect();
    }
  };

  return (
    <>
      <Modal title='Connect Wallet' closeModal={setIsOpen}>
        <>
          <div onClick={() => handleConnectWallet(0)} className='walletbtn'>
            <img src='/assets/icons/wallets/ico.metamask.svg' alt='' />
            <p className='tc-s'>METAMASK</p>
          </div>
          <div onClick={() => handleConnectWallet(1)} className='walletbtn'>
            <img src='/assets/icons/wallets/ico.walletconnect.svg' alt='' />
            <p className='tc-s'>WALLET CONNECT</p>
          </div>
        </>
      </Modal>

      <style jsx>
        {`
          .walletbtn {
            box-sizing: border-box;
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.048);
            margin-bottom: 16px;
            border-radius: 5px;
            padding: 16px;
            cursor: pointer;
          }

          .walletbtn:last-of-type {
            margin-bottom: 0;
          }

          .walletbtn:hover {
            background-color: rgba(255, 255, 255, 0.089);
          }

          img {
            margin-right: 16px;
          }
        `}
      </style>
    </>
  );
};

export default ConnectWalletModal;
