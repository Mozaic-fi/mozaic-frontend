import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import ConnectWalletModal from './ConnectWalletModal';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Modal from './Modal';
import SingleAssetWithdrawForm from '../forms/productindepth/SingleAssetWithdrawForm';
import MultiAssetWithdrawForm from '../forms/productindepth/MultiAssetWithdrawForm';
import { v4 as uuidv4 } from 'uuid';

type InputData = {
  id: any;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  amount: number;
  icoSrc?: string;
  rateVault?: number;
};

type WithdrawData = {
  slippage: number;
  from: InputData;
  to: Array<InputData>;
};

const WithdrawModal = ({ closeModal, availableToken, vault }: any) => {
  const web3reactContext = useWeb3React();
  const { width, height } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('single');

  const [singleAssetWithdrawData, setSingleAssetWithdrawData] =
    useState<WithdrawData>({
      slippage: 0.5,
      from: {
        id: '',
        name: vault.name,
        symbol: vault.symbol,
        address: vault.address,
        decimals: vault.decimals,
        amount: 0,
      },
      to: [
        {
          id: '',
          name: '',
          symbol: '',
          address: '',
          decimals: 0,
          amount: 0,
          icoSrc: '',
          rateVault: 0,
        },
      ],
    });

  const initialMultiAssetWithdrawData: WithdrawData = {
    slippage: 0.5,
    from: {
      id: '',
      name: '',
      symbol: '',
      address: '',
      decimals: 0,
      amount: 0,
    },
    to: [],
  };

  availableToken.forEach((token: any) => {
    initialMultiAssetWithdrawData.to.push({
      id: uuidv4(),
      name: token.name,
      symbol: token.symbol,
      address: token.address,
      decimals: token.decimals,
      amount: 0,
      icoSrc: token.icoSrc,
      rateVault: token.rateVault,
    });
  });

  const [multiAssetWithdrawData, setMultiAssetWithdrawData] =
    useState<WithdrawData>(initialMultiAssetWithdrawData);

  // Tab

  const handleTab = (tabName: string): void => setActiveTab(tabName);

  // withdraw fund

  const handleWithdraw = (mode: string): void => {
    if (mode === 'single') {
      console.log(singleAssetWithdrawData);
    }
    if (mode === 'multi') {
      console.log(multiAssetWithdrawData);
    }
  };

  useEffect(() => {
    // if (singleAssetWithdrawData.to[0].amount > 0) {
    // }
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
              singleAssetWithdraw={singleAssetWithdrawData}
              setSingleAssetWithdraw={setSingleAssetWithdrawData}
              vault={vault}
            />
          )}

          {activeTab === 'multi' && (
            <MultiAssetWithdrawForm
              availableToken={availableToken}
              multiAssetWithdraw={multiAssetWithdrawData}
              setMultiAssetWithdraw={setMultiAssetWithdrawData}
              vault={vault}
            />
          )}

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
