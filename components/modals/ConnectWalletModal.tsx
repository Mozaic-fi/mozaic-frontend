import useAuth from '../../hooks/useAuth';
import Modal from './Modal';

const ConnectWalletModal = ({ setIsOpen }: any) => {
  const { walletConnected, addWallet, removeWallet } = useAuth();

  const handleConnectWallet = (wallet: number) => {
    if (wallet === 0) {
      console.log('walletconnect clicked');
    }
    if (wallet === 1) {
      console.log('metamask clicked');
    }
    addWallet();
    setIsOpen(false);
  };

  return (
    <>
      <Modal title='Connect Wallet' closeModal={setIsOpen}>
        <div onClick={() => handleConnectWallet(0)} className='walletbtn'>
          <img src='/assets/icons/wallets/ico.walletconnect.svg' alt='' />
          <p>WALLET CONNECT</p>
        </div>
        <div onClick={() => handleConnectWallet(1)} className='walletbtn'>
          <img src='/assets/icons/wallets/ico.metamask.svg' alt='' />
          <p>META MASK</p>
        </div>
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
