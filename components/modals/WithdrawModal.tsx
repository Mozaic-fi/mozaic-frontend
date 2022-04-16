import { useState, useEffect } from 'react';
import ConnectWalletModal from './ConnectWalletModal';
import useAuth from '../../hooks/useAuth';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Modal from './Modal';
import SingleAssetWithdrawForm from '../forms/productindepth/SingleAssetWithdrawForm';
import MultiAssetWithdrawForm from '../forms/productindepth/MultiAssetWithdrawForm';

const WithdrawModal = ({ closeModal, availableToken, tokenName }: any) => {
  const { walletConnected } = useAuth();
  const { width, height } = useWindowDimensions();

  let multiAssetInitialValue: any = [];
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('single');
  const [singleAssetWithdraw, setSingleAssetWithdraw] = useState({
    tokenID: '',
    slippage: '0.5',
    amount: '',
    isMax: false,
  });

  availableToken.forEach(
    (token: any) =>
      (multiAssetInitialValue = [
        ...multiAssetInitialValue,
        { tokenID: token.id, slippage: 0.5, amount: 0, isMax: false },
      ])
  );

  const [multiAssetWithdraw, setMultiAssetWithdraw] = useState(
    multiAssetInitialValue
  );

  const handleTab = (tabName: string): void => setActiveTab(tabName);
  const handleWithdraw = (mode: string): void => {
    if (mode === 'single') {
      console.log(singleAssetWithdraw);
    }
    if (mode === 'multi') {
      console.log(multiAssetWithdraw);
    }
  };

  return (
    <>
      <Modal
        title='Withdraw'
        closeModal={closeModal}
        w={width > 770 ? '770px' : '100%'}
      >
        <>
          <div className='tab-container mb-5'>
            <div
              onClick={() => handleTab('single')}
              className={`tab-selector left ${
                activeTab === 'single' && 'active'
              }`}
            >
              Single Asset
            </div>
            <div
              onClick={() => handleTab('multi')}
              className={`tab-selector right ${
                activeTab === 'multi' && 'active'
              }`}
            >
              Multi Asset
            </div>
          </div>
          {activeTab === 'single' && (
            <SingleAssetWithdrawForm
              availableToken={availableToken}
              singleAssetWithdraw={singleAssetWithdraw}
              setSingleAssetWithdraw={setSingleAssetWithdraw}
              tokenName={tokenName}
            />
          )}

          {/* {activeTab === 'multi' && (
            <MultiAssetWithdrawForm
              availableToken={availableToken}
              multiAssetWithdraw={multiAssetWithdraw}
              setMultiAssetWithdraw={setMultiAssetWithdraw}
              tokenName={tokenName}
            />
          )} */}

          {!walletConnected ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='btn-primary w-100'
            >
              Connect Wallet
            </button>
          ) : (
            <button
              className='btn-primary w-100'
              onClick={() => handleWithdraw(activeTab)}
            >
              Withdraw
            </button>
          )}
          {isOpen && <ConnectWalletModal setIsOpen={setIsOpen} />}
        </>
      </Modal>

      <style jsx global>
        {`
          .tab-container {
            width: 100%;
            border: 2px solid var(--textSecondary50);
            display: flex;
            height: 50px;
            border-radius: 30px;
          }

          .tab-selector {
            display: flex;
            width: 50%;
            text-align: center;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--textSecondary);
            font-size: 0.9rem;
            transition: all 0.25s ease;

            &.left {
              border-radius: 30px 0 0 30px;
            }

            &.right {
              border-radius: 0 30px 30px 0;
            }

            &.active {
              background-color: var(--primaryColor);
              color: #25212b;
              font-weight: bold;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default WithdrawModal;
