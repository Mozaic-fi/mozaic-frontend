import { useState, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ValueEditorModal from '../../modals/ValueEditorModal';
import DepositFromInput from './DepositFormInput';

const SingleAssetDepositForm = ({
  availableToken,
  singleAssetDeposit,
  setSingleAssetDeposit,
  vault,
}: any) => {
  const { width, height } = useWindowDimensions();
  const [isValueEditor, setValueEditor] = useState<boolean>(false);
  const [currentToken, setCurrentToken] = useState(availableToken[0]);
  const [calculatedAmount, setCalculatedAmount] = useState<any>(0);

  // calculate amount for Deposital

  const calculateAmount = (amount: number, rate: number) => {
    const calculatedAmount = amount * rate;
    setCalculatedAmount(calculatedAmount);
  };

  // set slippage value

  const setSlippage = (value: number) => {
    setSingleAssetDeposit({ ...singleAssetDeposit, slippage: value });
  };

  const [to, setTo] = useState<any>();
  const [from, setFrom] = useState<any>();

  const setSingleAssetDepositData = (to: any, from: any) => {
    setSingleAssetDeposit({ ...singleAssetDeposit, from: from, to: [to] });
  };

  useEffect(() => {
    setSingleAssetDepositData(to, from);
    if (from) {
      calculateAmount(from.amount, currentToken.rateVault);
    }
  }, [to, from]);

  return (
    <>
      <div className='Deposit mb-2'>
        <p className='fs-s tc-s mb-2'>
          Remove liquidity in one transaction. Your {currentToken.symbol} will
          automatically swap to one of the underlying pool token.
        </p>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor='amount'>
            Enter {currentToken.symbol} Amount
          </label>

          <div className='df-c'>
            {/* Slippage */}

            <div className='df-c fs-xs'>Slippage</div>
            <div
              onClick={() => setValueEditor(!isValueEditor)}
              className='slippage max-btn df-c ml-1 hlt'
            >
              <p className='fs-xs tc-p mr-1'>{singleAssetDeposit.slippage}%</p>
              <img src='/assets/icons/ico.edit.svg'></img>
            </div>

            {isValueEditor && (
              <ValueEditorModal
                title='Set Slippage Value'
                closeModal={setValueEditor}
                value={singleAssetDeposit.slippage}
                setValue={setSlippage}
              />
            )}

            {/* Slippage */}
          </div>
        </div>

        <DepositFromInput
          form='deposit'
          type='input'
          availableTokens={availableToken}
          currentToken={currentToken}
          setCurrentToken={setCurrentToken}
          setData={setFrom}
          setFromDropdown={true}
        />

        <div className='df-sb mt-1 mb-1'>
          <p className='fs-s tc-s'>
            1 {currentToken.symbol} = ${currentToken.rateUSD}
          </p>
        </div>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor={vault.symbol}>
            {vault.symbol} Amount
          </label>
        </div>
        <DepositFromInput
          form='deposit'
          availableTokens={availableToken}
          type={'output'}
          vault={vault}
          setFromDropdown={false}
          setData={setTo}
          currentToken={currentToken}
          calculatedAmount={calculatedAmount}
        />
        <div className='df-sb mt-1'>
          <p className='fs-s tc-s'>
            1 {vault.symbol} = ${vault.rateUSD}
          </p>
          <p className='fs-s tc-s'>
            1 {vault.symbol} = {1 / currentToken.rateVault}{' '}
            {currentToken.symbol}
          </p>
        </div>
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

          .max-btn {
            height: 60%;
            padding-left: 8px;
            padding-right: 8px;
            color: rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            cursor: pointer;
          }

          .max-btn.active {
            color: #ffbb00;
            background-color: #ffbb0010;
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

export default SingleAssetDepositForm;
