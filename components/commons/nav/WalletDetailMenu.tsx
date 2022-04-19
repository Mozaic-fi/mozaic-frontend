import React from 'react';
import { useWeb3React } from '@web3-react/core';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { NewNotification } from '../notification/NewNotification';
import { useNotification } from '../../../hooks/useNotification';

export default function WalletDetailMenu(setShowWalletMenu: any) {
  const web3reactContext = useWeb3React();
  const { height, width } = useWindowDimensions();
  const dispatch = useNotification();

  const removeWallet = (): void => {
    try {
      web3reactContext.deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleWalletRemoval = (): void => {
    removeWallet();
  };

  function copy() {
    dispatch({
      type: 'SUCCESS',
      message: 'Wallet address copied to clipboard!',
    });
    navigator.clipboard.writeText(web3reactContext.account!);
  }

  return (
    <>
      <div className='wallet-menu-container bg-card-primary glow blur-2'>
        <div className='triangle bg-card-primary'></div>
        <div className='df-sb w-100 pl-4 pr-4'>
          <p className='tc-s fw-b ta-l'>
            Connected
            <br /> Wallet
          </p>
          <button onClick={copy} className='btn-primary df-c'>
            <img
              className='mr-1'
              src='/assets/icons/misc/ico.copy.svg'
              alt=''
            />
            Copy
          </button>
        </div>
        <div className='w-100 df-c pb-1'>
          <p className='fs-xxs ta-c w-100 tc-s'>{web3reactContext.account}</p>
        </div>
        <div className='separator bg-pc mt-1 w-100'></div>
        <div className='df-sb w-100 pl-4 pr-4 mt-2'>
          <div className='df-c'>
            <img
              className='mr-1'
              src='/assets/icons/tokens/ico.token.moz.svg'
              alt=''
            />
            <p className='tc-s fw-b ta-l'>
              MOZ
              <br />
              Balance:
            </p>
          </div>
          <p className='tc-h fs-xl fw-b'>12345.32</p>
        </div>
        <div
          className='wallet-disconnect-btn fs-xs ta-c mt-4 mb-1'
          onClick={handleWalletRemoval}
        >
          Disconnect Wallet
        </div>
      </div>

      <style jsx>
        {`
          .wallet-menu-container {
            display: flex;
            flex-direction: column;
            max-width: 300px;
            align-items: flex-start;
            justify-content: start;
            margin-top: 36px;
            position: absolute;
            border-radius: 15px;
            right: 0;
            padding: 20px 0;
            color: white;
            font-weight: 400;
          }

          .triangle {
            position: absolute;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            border-radius: 10px 0 0 0;
            top: -15px;
            right: 62px;
          }

          @media screen and (max-width: 480px) {
            .wallet-menu-container {
              margin-top: 336px;
              margin-left: 20px;
              margin-right: 20px;
              right: -82px;
            }
            .triangle {
              right: 76px;
            }
          }

          .btn-primary {
            padding: 8px 16px;
            margin: 0;
            font-weight: 500;
            font-size: 0.65rem;
            img {
              transition: all 0.25s ease;
            }
          }

          .btn-primary:hover {
            img {
              filter: invert(9%) sepia(88%) saturate(6%) hue-rotate(315deg)
                brightness(5%) contrast(94%);
            }
          }

          .wallet-disconnect-btn {
            color: var(--primaryColor);
            text-decoration: underline;
            margin-left: auto;
            margin-right: auto;

            &:hover {
              color: white;
            }
          }
        `}
      </style>
    </>
  );
}
