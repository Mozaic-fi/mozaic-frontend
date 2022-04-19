import React from 'react';

const SelectOptions = ({
  type = 'dropdown',
  options = [],
  selectedVal,
  setSelectedVal,
  handleClick,
}: {
  type: string;
  options: any | [];
  selectedVal: string | undefined;
  setSelectedVal: Function;
  handleClick?: Function;
}) => {
  const selectOptHandler = (e: any) => {
    setSelectedVal(e.target.value);
    console.log(selectedVal);
  };

  return (
    <>
      {type === 'dropdown' && (
        <select
          className='select-container'
          onChange={
            !handleClick
              ? selectOptHandler
              : (e: any) => {
                  handleClick(e.target.value);
                }
          }
        >
          {options.map(
            (option: { id: any; value: string | undefined; name: string }) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            )
          )}
        </select>
      )}
      {type === 'range' && (
        <div className='select-container range'>
          {options.map(
            (option: { id: any; value: string; name: string }, i: any) => (
              <React.Fragment key={option.id}>
                <button
                  onClick={
                    !handleClick
                      ? selectOptHandler
                      : (e: any) => {
                          handleClick(e.target.value);
                        }
                  }
                  value={option.value}
                  className={option.value === selectedVal ? 'active' : ''}
                >
                  {option.name}
                </button>
                <div className='separator'></div>
              </React.Fragment>
            )
          )}
        </div>
      )}
      <style jsx>
        {`
          button {
            height: 35px;
            cursor: pointer;
          }
          .select-container {
            display: flex;
            flex-direction: row;
            background: linear-gradient(
                  95.03deg,
                  var(--bgSecondary),
                  var(--bgSecondary) 100.65%
                )
                padding-box,
              linear-gradient(
                  135deg,
                  var(--textSecondary50) 0%,
                  var(--bgPrimary) 100%
                )
                border-box;
            border: 1px solid transparent;
            color: #9d9d98;
            border-radius: 5px;
            font-size: 0.875rem;
            height: 45px;
            // max-width: 80%;
            min-width: 150px;
            padding-left: 20px;
            padding-right: 20px;
            box-sizing: border-box;
            align-items: center;
            margin-left: 20px;
            margin: 5px 0px 5px 20px;

            button {
              font-size: 0.7rem;
              color: #9d9d98;
              width: 45px;
              min-width: 35px;
              height: 85%;
              background-color: transparent;
              border: none;
              border-radius: 3px;
              margin: 0px 2px;

              &:hover {
                background: #ffffff30;
              }
            }

            .active {
              background-color: var(--bgPrimary);
            }

            .separator {
              width: 1px;
              height: 30px;
              background-color: var(--textSecondary50);
              margin: auto 2px;

              &:last-child {
                display: none;
              }
            }
          }

          .range {
            justify-content: space-evenly;
            min-width: min-content;
            box-sizing: border-box;
            padding-left: 4px !important;
            padding-right: 4px !important;
          }

          @media screen and (max-width: 764px) {
            .select-container {
              width: 100%;
              margin-left: 0;
            }
          }

          @media screen and (max-width: 330px) {
            .range {
              button {
                width: auto;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default SelectOptions;
