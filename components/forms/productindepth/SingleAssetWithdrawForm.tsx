import { useState, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import DropdownWithIcons from '../../commons/dropdown/DropdownWithIcons';
import ValueEditorModal from '../../commons/modals/ValueEditorModal';

const SingleAssetWithdrawForm = ({
  availableToken,
  singleAssetWithdraw,
  setSingleAssetWithdraw,
  tokenName,
}: any) => {
  const { width, height } = useWindowDimensions();
  const [isValueEditor, setValueEditor] = useState<boolean>(false);
  const [showList, setShowList] = useState(false);
  const [token, setToken] = useState(availableToken[0].id);
  const currToken = availableToken.filter((i: any) => i.id === token)[0];
  const [calcAmount, setCalcAmount] = useState(0.0);
  const handleTokenSelection = () => setShowList(!showList);

  const calculateAmount = () => {
    setCalcAmount(12345);
    console.log(calcAmount);
  };

  const setSlippage = (value: number) => {
    setSingleAssetWithdraw({ ...singleAssetWithdraw, slippage: value });
  };

  useEffect(() => {
    setSingleAssetWithdraw({ ...singleAssetWithdraw, tokenID: currToken.id });
  }, [currToken.id]);

  useEffect(() => {
    calculateAmount();
  }, [singleAssetWithdraw]);

  return (
    <>
      <div className='withdraw mb-2'>
        <p className='fs-s tc-s mb-2'>
          Remove liquidity in one transaction. Your {tokenName} will
          automatically swap to one of the underlying pool token.
        </p>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor='amount'>
            Enter Amount
          </label>
        </div>

        <div className='input-container rounded'>
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
        </div>

        <div className='df-sb'>
          <p className='fs-s tc-s'>$...</p>
        </div>

        <div className='df-sb label mb-1'>
          <label className='fs-s t-b' htmlFor={tokenName}>
            {tokenName} Amount
          </label>
          <div className='df-c'>
            <div className='df-c fs-xs'>Slippage</div>
            <div
              onClick={() => setValueEditor(!isValueEditor)}
              className='slippage max-btn df-c ml-1 hlt'
            >
              <p className='fs-xs tc-p mr-1'>{singleAssetWithdraw.slippage}%</p>
              <img src='/assets/icons/ico.edit.svg'></img>
            </div>
            {/* {isValueEditor && (
              <ValueEditorModal
                title='Set Slippage Value'
                closeModal={setValueEditor}
                value={singleAssetWithdraw.slippage}
                setValue={setSlippage}
              />
            )} */}
          </div>
        </div>

        <div className='input-container rounded'>
          <input
            placeholder='0.00'
            className='fs-xl ff-2 tc-p'
            id={tokenName}
            readOnly
            value={calcAmount}
            type='number'
          />
          <div className='df-sb'>
            <p className='tc-s ml-2'>{tokenName}</p>
          </div>
        </div>

        <div className='df-sb'>
          <p className='fs-s tc-s'>$...</p>
          <p className='fs-s tc-s'>
            1 {currToken.name} = {currToken.price} {tokenName}
          </p>
        </div>
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

export default SingleAssetWithdrawForm;
