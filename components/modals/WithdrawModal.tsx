import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import ConnectWalletModal from './ConnectWalletModal';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Modal from './Modal';
import SingleAssetWithdrawForm from '../forms/productindepth/SingleAssetWithdrawForm';
import MultiAssetWithdrawForm from '../forms/productindepth/MultiAssetWithdrawForm';

type withdrawData = {
  tokenID: any;
  slippage: number;
  amount: number;
};

const WithdrawModal = ({ closeModal, availableToken, tokenName }: any) => {
  const web3reactContext = useWeb3React();

  const { width, height } = useWindowDimensions();

  let multiAssetInitialValue: any = [];

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('single');

  const [singleAssetWithdraw, setSingleAssetWithdraw] = useState<withdrawData>({
    tokenID: '',
    slippage: 0.5,
    amount: 123,
  });

  const [max, setMax] = useState<boolean>(false);

  const setMaxBalance = (token: any, balance: number): void => {};

  // form input data

  availableToken.forEach(
    (token: any) =>
      (multiAssetInitialValue = [
        ...multiAssetInitialValue,
        { tokenID: token.id, slippage: 0.5, amount: 0 },
      ])
  );

  const [multiAssetWithdraw, setMultiAssetWithdraw] = useState(
    multiAssetInitialValue
  );

  // Tab

  const handleTab = (tabName: string): void => setActiveTab(tabName);

  // withdraw fund

  const handleWithdraw = (mode: string): void => {
    if (mode === 'single') {
      console.log(singleAssetWithdraw);
    }
    if (mode === 'multi') {
      console.log(multiAssetWithdraw);
    }
  };

  useEffect(() => {
    if (singleAssetWithdraw.amount > 0) {
    }
  }, []);

  return (
    <>
      <Modal
        title='Withdraw'
        closeModal={closeModal}
        w={width > 770 ? '770px' : '100%'}
      >
        <>
          {/* tab */}

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

          {/* form */}

          {activeTab === 'single' && (
            <SingleAssetWithdrawForm
              availableToken={availableToken}
              singleAssetWithdraw={singleAssetWithdraw}
              setSingleAssetWithdraw={setSingleAssetWithdraw}
              tokenName={tokenName}
              setMax={setMaxBalance}
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

          {!web3reactContext.account ? (
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
