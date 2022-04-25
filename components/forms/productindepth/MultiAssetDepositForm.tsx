import useWindowDimensions from '../../../hooks/useWindowDimensions';
import React, { useState, useEffect } from 'react';
import ValueEditorModal from '../../modals/ValueEditorModal';
import DepositFromInput from './DepositFormInput';

const MultiAssetDepositForm = ({
  availableToken,
  multiAssetDeposit,
  setMultiAssetDeposit,
  vault,
}: any) => {
  const { width, height } = useWindowDimensions();
  const [isValueEditor, setValueEditor] = useState<boolean>(false);
  const [calculatedAmount, setCalculatedAmount] = useState<any>(0);
  let [data, setData] = useState<any>([]);

  const [to, setTo] = useState<any>();
  const [from, setFrom] = useState<any>([]);

  const setMultiAssetDepositData = (to: any) => {
    setMultiAssetDeposit({ ...multiAssetDeposit, to: to });
  };

  // for generating slippage amount from multiple assets

  const setSlippage = (value: number) => {
    setMultiAssetDeposit({ ...multiAssetDeposit, slippage: value });
  };

  // for generating withdraw amount from multiple assets

  const onChange = (i: number, value: any): any => {
    data[i] = value * multiAssetDeposit.from[i].rateVault;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + (data[i] ? parseFloat(data[i]) : 0);
      console.log(i, data[i]);
    }
    setCalculatedAmount(sum);
    setMultiAssetDeposit({ ...multiAssetDeposit, from: from });
  };

  useEffect(() => {
    setMultiAssetDepositData(to);
  }, [to, from]);

  return (
    <>
      <div className='Deposit mb-2'>
        <p className='fs-s tc-s mb-2'>
          Remove liquidity in one transaction. Your tokens will automatically
          swap to one of the underlying pool token.
        </p>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor='amount'>
            Enter {vault.symbol} Amount
          </label>

          <div className='df-c'>
            {/* Slippage */}

            <div className='df-c fs-xs'>Slippage</div>
            <div
              onClick={() => setValueEditor(!isValueEditor)}
              className='slippage max-btn df-c ml-1 hlt'
            >
              <p className='fs-xs tc-p mr-1'>{multiAssetDeposit.slippage}%</p>
              <img src='/assets/icons/ico.edit.svg'></img>
            </div>

            {isValueEditor && (
              <ValueEditorModal
                title='Set Slippage Value'
                closeModal={setValueEditor}
                value={multiAssetDeposit.slippage}
                setValue={setSlippage}
              />
            )}

            {/* Slippage */}
          </div>
        </div>
        <div className='multi-token-container'>
          {multiAssetDeposit.from.map((token: any, i: number) => (
            <React.Fragment key={token.address}>
              <DepositFromInput
                index={i}
                formType='multi'
                type='input'
                currentToken={token}
                vault={vault}
                setData={from}
                onChange={onChange}
              />
            </React.Fragment>
          ))}
        </div>

        <div className='df-sb mt-1 mb-1'>
          <p className='fs-s tc-s'>
            1 {vault.symbol} = ${vault.rateUSD}
          </p>
        </div>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor={vault.symbol}>
            {`You'll Get`}
          </label>
        </div>
        <div className='multi-token-container'>
          <DepositFromInput
            type='output'
            vault={vault}
            setData={setTo}
            calculatedAmount={calculatedAmount}
          />
        </div>
        {/* <div className='df-sb mt-1'>
          <p className='fs-s tc-s'>
            1 {currentToken.symbol} = ${currentToken.rateUSD}
          </p>
          <p className='fs-s tc-s'>
            1 {currentToken.symbol} = {currentToken.rateVault} {vault.symbol}
          </p>
        </div> */}
      </div>
      <style jsx global>
        {`
          input {
            border: none;
            height: 60px;
            padding-left: 30px;
            box-sizing: border-box;
            background-color: transparent;
            width: inherit;
            flex-grow: 1;
          }

          .input-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            background-color: var(--bgTextInput);
            width: 100%;
            padding-right: 8px;
          }

          .input-container-c {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            background-color: var(--bgTextInput);
            width: 49%;
            padding-right: 8px;
          }

          .multi-token-container {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            overflow: auto;
            max-height: 30vh;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input:focus-visible {
            outline-offset: 0;
            outline: none;
          }

          .token-name-container {
            width: 100px;
            justify-content: ${width > 480 ? 'start' : 'end'};
          }

          .slippage {
            cursor: pointer;
          }

          .slippage.max-btn {
            padding-right: 0 !important;
          }
        `}
      </style>
    </>
  );
};

export default MultiAssetDepositForm;
