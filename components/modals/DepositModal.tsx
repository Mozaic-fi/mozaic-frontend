import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import ConnectWalletModal from './ConnectWalletModal';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';
import SingleAssetDepositForm from '../forms/productindepth/SingleAssetDepositForm';
import MultiAssetDepositForm from '../forms/productindepth/MultiAssetDepositForm';

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

type DepositData = {
  slippage: number;
  from: Array<InputData>;
  to: InputData;
};

const DepositModal = ({ closeModal, availableToken, vault }: any) => {
  const web3reactContext = useWeb3React();
  const { width, height } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('single');

  const [singleAssetDepositData, setSingleAssetDepositData] =
    useState<DepositData>({
      slippage: 0.5,
      from: [
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
      to: {
        id: '',
        name: vault.name,
        symbol: vault.symbol,
        address: vault.address,
        decimals: vault.decimals,
        amount: 0,
      },
    });

  const initialMultiAssetDepositData: DepositData = {
    slippage: 0.5,
    to: {
      id: '',
      name: '',
      symbol: '',
      address: '',
      decimals: 0,
      amount: 0,
    },
    from: [],
  };

  availableToken.forEach((token: any) => {
    initialMultiAssetDepositData.from.push({
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

  const [multiAssetDepositData, setMultiAssetDepositData] =
    useState<DepositData>(initialMultiAssetDepositData);

  // Tab

  const handleTab = (tabName: string): void => setActiveTab(tabName);

  // Deposit fund

  const handleDeposit = (mode: string): void => {
    if (mode === 'single') {
      console.log(singleAssetDepositData);
    }
    if (mode === 'multi') {
      console.log(multiAssetDepositData);
    }
  };

  useEffect(() => {
    // if (singleAssetDepositData.to[0].amount > 0) {
    // }
  }, []);

  return (
    <>
      <Modal
        title='Deposit'
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
            <SingleAssetDepositForm
              availableToken={availableToken}
              singleAssetDeposit={singleAssetDepositData}
              setSingleAssetDeposit={setSingleAssetDepositData}
              vault={vault}
            />
          )}

          {activeTab === 'multi' && (
            <MultiAssetDepositForm
              availableToken={availableToken}
              multiAssetDeposit={multiAssetDepositData}
              setMultiAssetDeposit={setMultiAssetDepositData}
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
              onClick={() => handleDeposit(activeTab)}
            >
              Deposit
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

export default DepositModal;
