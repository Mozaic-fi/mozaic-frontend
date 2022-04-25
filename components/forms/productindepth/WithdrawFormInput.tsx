import React, { SetStateAction, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useBalance from '../../../hooks/useBalance';
import DropdownWithIcons from '../../commons/dropdown/DropdownWithIcons';

export default function WithdrawFormInput({
  index,
  formType = 'single',
  availableTokens,
  setFromDropdown = false,
  type = 'input',
  setData,
  currentToken,
  setCurrentToken,
  vault,
  calculatedAmount,
  onChange,
}: {
  index?: number;
  form?: string;
  formType?: string;
  availableTokens?: object[];
  token?: any;
  setFromDropdown?: boolean;
  type?: string;
  input?: boolean;
  setData?: SetStateAction<any>;
  currentToken?: any;
  setCurrentToken?: SetStateAction<any>;
  vault?: any;
  value?: number;
  calculatedAmount?: number;
  onChange?: Function;
}) {
  const [showList, setShowList] = useState(false);
  const [amount, setAmount] = useState<any>(0);
  const [maxBalance] = useBalance(
    type !== 'input' ? currentToken.address : vault.address,
    type !== 'input' ? currentToken.decimals : vault.decimals
  );
  const handleTokenSelection = () => setShowList(!showList);

  useEffect(() => {
    setData({
      id: uuidv4(),
      name: type !== 'input' ? currentToken.name : vault.name,
      symbol: type !== 'input' ? currentToken.symbol : vault.symbol,
      address: type !== 'input' ? currentToken.address : vault.address,
      decimals: type !== 'input' ? currentToken.decimals : vault.decimals,
      amount: type !== 'input' ? calculatedAmount : amount,
    });
  }, [amount, currentToken, vault, calculatedAmount]);

  return (
    <>
      <div className='input-container rounded'>
        <input
          placeholder='0.00'
          className={`fs-xl ff-2 tc-p ${type === 'output' ? 'tc-h' : ''}`}
          id='amount'
          onChange={(e) => {
            setAmount(e.target.value);
            if (onChange && index === undefined) {
              onChange(e.target.value);
            }
          }}
          readOnly={type === 'output'}
          value={type === 'input' ? amount : calculatedAmount}
          type='number'
        />
        <div className='df-sb'>
          {type === 'input' && (
            <div
              className={`max-btn mr-1 ${amount === maxBalance && 'active'}`}
              onClick={() => {
                setAmount(maxBalance);
                if (onChange) {
                  onChange(maxBalance);
                }
              }}
            >
              Max
            </div>
          )}

          {formType === 'multi' ? (
            <div className='token-name-container'>
              <p className='mr-1'>{currentToken.symbol}</p>
              <img src={currentToken.icoSrc} alt='' />
            </div>
          ) : (
            <>
              {setFromDropdown ? (
                <div className='dropdown'>
                  <DropdownWithIcons
                    options={availableTokens}
                    selectedOption={currentToken}
                    setOption={setCurrentToken}
                    handleOptionSelection={handleTokenSelection}
                    showList={showList}
                  />
                </div>
              ) : (
                <div className='df-sb'>
                  <p className='tc-s ml-2 mr-2'>{vault.symbol}</p>
                </div>
              )}
            </>
          )}
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

          .token-name-container {
            width: 90px;
            display: flex;
            align-items: center;
            justify-content: end;
            margin-right: 5px;
          }
        `}
      </style>
    </>
  );
}
