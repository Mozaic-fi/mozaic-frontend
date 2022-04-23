import { useState, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ValueEditorModal from '../../modals/ValueEditorModal';
import InputForm from './InputForm';

const SingleAssetWithdrawForm = ({
  availableToken,
  singleAssetWithdraw,
  setSingleAssetWithdraw,
  vault,
}: any) => {
  const { width, height } = useWindowDimensions();
  const [isValueEditor, setValueEditor] = useState<boolean>(false);
  const [currentToken, setCurrentToken] = useState(availableToken[0]);
  const [calcAmount, setCalcAmount] = useState(0.0);

  // for displaying the calculated amount for withdrawal

  const calculateAmount = () => {
    setCalcAmount(12345);
    console.log(calcAmount);
  };

  const setSlippage = (value: number) => {
    setSingleAssetWithdraw({ ...singleAssetWithdraw, slippage: value });
  };

  const [to, setTo] = useState();
  const [from, setFrom] = useState();

  // const setSingleAssetWithdrawData = (to: any, from: any) => {
  //   setSingleAssetWithdraw({ ...singleAssetWithdraw, to: to, from: from });
  // };

  useEffect(() => {
    calculateAmount();
  }, [singleAssetWithdraw]);

  return (
    <>
      <div className='withdraw mb-2'>
        <p className='fs-s tc-s mb-2'>
          Remove liquidity in one transaction. Your {vault.symbol} will
          automatically swap to one of the underlying pool token.
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
              <p className='fs-xs tc-p mr-1'>{singleAssetWithdraw.slippage}%</p>
              <img src='/assets/icons/ico.edit.svg'></img>
            </div>

            {isValueEditor && (
              <ValueEditorModal
                title='Set Slippage Value'
                closeModal={setValueEditor}
                value={singleAssetWithdraw.slippage}
                setValue={setSlippage}
              />
            )}

            {/* Slippage */}
          </div>
        </div>

        <InputForm
          availableTokens={availableToken}
          vault={vault}
          setData={setTo}
        />

        {/* <div className='input-container rounded'>
          <input
            placeholder='0.00'
            className='fs-xl ff-2 tc-p'
            id='amount'
            onChange={(e) => {
              setSingleAssetWithdraw({
                ...singleAssetWithdraw,
                amount: e.target.value,
              });
              calculateAmount();
            }}
            value={singleAssetWithdraw.amount}
            type='number'
          />
          <div className='df-sb'>
            <div
              className={`max-btn mr-1 ${
                singleAssetWithdraw.isMax && 'active'
              }`}
              onClick={() =>
                setSingleAssetWithdraw({
                  ...singleAssetWithdraw,
                  isMax: !singleAssetWithdraw.isMax,
                })
              }
            >
              Max
            </div>
            <div className='dropdown'>
              <DropdownWithIcons
                options={availableToken}
                option={token}
                setOption={setToken}
                handleOptionSelection={handleTokenSelection}
                showList={showList}
              />
            </div>
          </div>
        </div> */}

        <div className='df-sb mt-1 mb-1'>
          <p className='fs-s tc-s'>
            1 {vault.symbol} = ${vault.tokenToUSDRate}
          </p>
        </div>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor={vault.symbol}>
            {vault.symbol} Amount
          </label>
          {/* <div className='df-c'>
            <div className='df-c fs-xs'>Slippage</div>
            <div
              onClick={() => setValueEditor(!isValueEditor)}
              className='slippage max-btn df-c ml-1 hlt'
            >
              <p className='fs-xs tc-p mr-1'>{singleAssetWithdraw.slippage}%</p>
              <img src='/assets/icons/ico.edit.svg'></img>
            </div>
            {isValueEditor && (
              <ValueEditorModal
                title='Set Slippage Value'
                closeModal={setValueEditor}
                value={singleAssetWithdraw.slippage}
                setValue={setSlippage}
              />
            )}
          </div> */}
        </div>
        {/* 
        <div className='input-container rounded'>
          <input
            placeholder='0.00'
            className='fs-xl ff-2 tc-p'
            id={vault.symbol}
            readOnly
            value={calcAmount}
            type='number'
          />
          <div className='df-sb'>
            <p className='tc-s ml-2 mr-2'>{vault.symbol}</p>
          </div>
        </div>

        <div className='df-sb'>
          <p className='fs-s tc-s'>$...</p>
          <p className='fs-s tc-s'>
            1 {currToken.name} = {currToken.price} {vault.symbol}
          </p>
        </div> */}
        <InputForm
          availableTokens={availableToken}
          type={'output'}
          vault={vault}
          setFromDropdown={true}
          setData={setFrom}
          currentToken={currentToken}
          setCurrentToken={setCurrentToken}
        />
        <div className='df-sb mt-1'>
          <p className='fs-s tc-s'>
            1 {currentToken.symbol} = ${currentToken.tokenToUSDRate}
          </p>
          <p className='fs-s tc-s'>
            1 {currentToken.symbol} = {currentToken.tokenToUSDRate}{' '}
            {vault.symbol}
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

export default SingleAssetWithdrawForm;
