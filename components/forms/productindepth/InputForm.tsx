import { randomUUID } from 'crypto';
import React, { SetStateAction, useEffect, useState } from 'react';
import useBalance from '../../../hooks/useBalance';
import DropdownWithIcons from '../../commons/dropdown/DropdownWithIcons';

export default function InputForm({
  form = 'withdraw',
  availableTokens,
  token,
  setFromDropdown = false,
  type = 'input',
  setData,
  currentToken,
  setCurrentToken,
  vault,
}: {
  form?: string;
  availableTokens?: object[];
  token?: object;
  setFromDropdown?: boolean;
  type?: string;
  input?: boolean;
  setData?: SetStateAction<any>;
  currentToken?: any;
  setCurrentToken?: SetStateAction<any>;
  vault?: any;
  value?: number;
}) {
  const [showList, setShowList] = useState(false);
  const [amount, setAmount] = useState<any>();
  const [maxBalance] = useBalance(
    form === 'withdraw' ? vault.address : currentToken.address,
    form === 'withdraw' ? vault.decimals : currentToken.decimals
  );
  const handleTokenSelection = () => setShowList(!showList);

  useEffect(() => {
    setData({
      id: randomUUID,
      name: (form = 'withdraw' ? vault.name : currentToken.name),
      symbol: (form = 'withdraw' ? vault.symbol : currentToken.symbol),
      address: (form = 'withdraw' ? vault.address : currentToken.address),
      decimals: (form = 'withdraw' ? vault.decimals : currentToken.decimals),
      amount: amount,
    });
  }, [amount, currentToken, vault]);

  return (
    <>
      <div className='input-container rounded'>
        <input
          placeholder='0.00'
          className={`fs-xl ff-2 tc-p ${type === 'output' ? 'tc-h' : ''}`}
          id='amount'
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          readOnly={type === 'output'}
          value={amount ?? ''}
          type='number'
        />
        <div className='df-sb'>
          {type === 'input' && (
            <div
              className={`max-btn mr-1 ${amount === maxBalance && 'active'}`}
              onClick={() => setAmount(maxBalance)}
            >
              Max
            </div>
          )}

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
        `}
      </style>
    </>
  );
}
