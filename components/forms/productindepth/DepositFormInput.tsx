import React, { SetStateAction, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useBalance from '../../../hooks/useBalance';
import DropdownWithIcons from '../../commons/dropdown/DropdownWithIcons';

export default function DepositFromInput({
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
  formType?: string;
  availableTokens?: object[];
  token?: any;
  setFromDropdown?: boolean;
  type?: string;
  input?: boolean;
  setData?: SetStateAction<any> | object;
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
    type !== 'input' ? vault.address : currentToken.address,
    type !== 'input' ? vault.decimals : currentToken.decimals
  );
  const handleTokenSelection = () => setShowList(!showList);

  useEffect(() => {
    if (index === undefined) {
      setData({
        id: uuidv4(),
        name: type !== 'input' ? vault.name : currentToken.name,
        symbol: type !== 'input' ? vault.symbol : currentToken.symbol,
        address: type !== 'input' ? vault.address : currentToken.address,
        decimals: type !== 'input' ? vault.decimals : currentToken.decimals,
        amount: type !== 'input' ? calculatedAmount : amount,
      });
    } else if (index !== undefined && formType === 'multi') {
      setData[index] = {
        id: uuidv4(),
        name: currentToken.name,
        symbol: currentToken.symbol,
        address: currentToken.address,
        decimals: currentToken.decimals,
        amount: amount,
        rateVault: currentToken.rateVault,
        icoSrc: currentToken.icoSrc,
      };
    }
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
            if (onChange && index !== undefined) {
              onChange(index, e.target.value);
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
                if (onChange && index === undefined) {
                  onChange(maxBalance);
                }
                if (onChange && index !== undefined) {
                  onChange(index, maxBalance);
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
