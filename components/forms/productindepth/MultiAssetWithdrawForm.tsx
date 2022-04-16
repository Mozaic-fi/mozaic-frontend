import useWindowDimensions from '../../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';
import ValueEditorModal from '../../common/modals/ValueEditorModal';

const MultiAssetWithdrawForm = ({
  availableToken,
  multiAssetWithdraw,
  setMultiAssetWithdraw,
  tokenName,
  calculatedAmount,
}) => {
  const { width, height } = useWindowDimensions();
  const [isValueEditor, setValueEditor] = useState(false);

  const [calcAmount, setCalcAmount] = useState(0.0);

  const calculateAmount = () => {
    setCalcAmount(12345);
    console.log(calcAmount);
  };

  const updateAmount = (e, i) => {
    let val = [...multiAssetWithdraw];
    val[i].amount = e.target.value;
    setMultiAssetWithdraw(val);
  };

  const updateMax = (i) => {
    let val = [...multiAssetWithdraw];
    val[i].isMax = !val[i].isMax;
    setMultiAssetWithdraw(val);
  };

  const setSlippage = (value) => {
    let val = [...multiAssetWithdraw];
    for (let i = 0; i < val.length; i++) {
      val[i].slippage = value;
    }
    setMultiAssetWithdraw(val);
  };

  useEffect(() => {
    calculateAmount();
  }, [multiAssetWithdraw]);

  return (
    <>
      <div className='withdraw mb-2'>
        <p className='fs-s tc-s mb-2'>
          Add liquidity in underlying pool tokens. First, approve all tokens to
          power index smart contract and then click supply.
        </p>

        <div className='multi-token-container'>
          {multiAssetWithdraw.map((token, i) => (
            <div key={token.tokenID} className='input-container-c df-s mb-1'>
              <input
                onChange={(e) => updateAmount(e, i)}
                defaultValue=''
                placeholder='0.00'
                type='number'
              />
              <div className='df-sb'>
                <div
                  className={`max-btn mr-1 ${
                    multiAssetWithdraw[i].isMax && 'active'
                  }`}
                  onClick={() => updateMax(i)}
                >
                  Max
                </div>
                <div className='df-c token-name-container'>
                  <img
                    className='mr-1'
                    src={
                      availableToken.filter((i) => i.id === token.tokenID)[0]
                        .icoSrc
                    }
                    alt=''
                  />
                  {width > 570 && (
                    <p>
                      {
                        availableToken.filter((i) => i.id === token.tokenID)[0]
                          .name
                      }
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='df-sb label'>
          <label className='fs-s t-b' htmlFor={tokenName}>
            {tokenName} Amount
          </label>
          <div className='df-c'>
            <div className='df-c fs-xs'>Slippage</div>
            <div
              onClick={() => setValueEditor(!isValueEditor)}
              className='slippage max-btn df-c ml-1 hlt'
            >
              <p className='fs-xs tc-p mr-1'>
                {multiAssetWithdraw[0].slippage}%
              </p>
              <img src='/assets/icons/ico.edit.svg'></img>
            </div>
            {isValueEditor && (
              <ValueEditorModal
                title='Set Slippage Value'
                closeModal={setValueEditor}
                value={multiAssetWithdraw[0].slippage}
                setValue={setSlippage}
              />
            )}
          </div>
        </div>

        <div className='input-container'>
          <input
            placeholder='0.00'
            className='fs-xl ff-2 tc-p'
            id={tokenName}
            readOnly
            value={calcAmount}
            type='number'
          />
          <div>
            {' '}
            <p className='tc-s ml-2'>{tokenName}</p>
          </div>
        </div>
        <p>{calculatedAmount} hello</p>

        <p className='fs-s tc-s'>
          0.1% enter fee will be transferred to community pool
        </p>
      </div>

      <style jsx>
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
            background-color: rgba(255, 255, 255, 0.05);
            width: 100%;
            padding-right: 8px;
          }

          .input-container-c {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.05);
            width: ${width > 420 ? '49%' : '100%'};
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
            width: ${width > 570 ? '100px' : 'min-content'};
            justify-content: ${width > 570 ? 'start' : 'end'};
          }

          .max-btn {
            height: 60%;
            padding-left: 8px;
            padding-right: 8px;
            color: rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }

          .max-btn.active {
            color: #ffbb00;
            background-color: #ffbb0010;
          }
          .slippage.max-btn {
            padding-right: 0 !important;
          }
        `}
      </style>
    </>
  );
};

export default MultiAssetWithdrawForm;
