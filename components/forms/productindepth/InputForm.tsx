import React, { SetStateAction, useEffect, useState } from 'react';
import useBalance from '../../../hooks/useBalance';
import DropdownWithIcons from '../../commons/dropdown/DropdownWithIcons';

export default function InputForm({
  availableTokens,
  token,
  type = 'single asset',
  setAmount,
}: {
  availableTokens?: object[];
  token?: object;
  type?: string;
  setAmount?: SetStateAction<object>;
}) {
  const [showList, setShowList] = useState(false);
  const [currentToken, setCurrentToken] = useState<any>(
    availableTokens ? availableTokens[0] : token
  );

  const [balance, setBalance] = useState<any>();

  const [maxBalance] = useBalance(currentToken.address, currentToken.decimals);

  const handleTokenSelection = () => setShowList(!showList);

  useEffect(() => {
    console.log(balance);
    console.log(maxBalance);
    console.log(currentToken);
    // console.log(currentToken.address, currentToken.decimals);
  }, [balance]);

  return (
    <>
      <div className='input-container rounded'>
        <input
          placeholder='0.00'
          className='fs-xl ff-2 tc-p'
          id='amount'
          onChange={(e) => {
            setBalance(e.target.value);
            // calculateAmount();
            // console.log();
          }}
          value={balance}
          type='number'
        />
        <div className='df-sb'>
          <div
            className={`max-btn mr-1 ${balance === maxBalance && 'active'}`}
            onClick={() => setBalance(maxBalance)}
          >
            Max
          </div>
          {type === 'single asset' && (
            <div className='dropdown'>
              <DropdownWithIcons
                options={availableTokens}
                selectedOption={currentToken}
                setOption={setCurrentToken}
                handleOptionSelection={handleTokenSelection}
                showList={showList}
              />
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
