import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function StakeForm({
  stake,
  setStake,
  weeks,
  setWeek,
  submitStake,
}: any) {
  const { width } = useWindowDimensions();

  const setMaxBalance = () => {
    console.log('set max balance here');
  };

  return (
    <>
      <div className='stake-form-container rounded'>
        <div className='df-sb mb-2 stake-input-container'>
          <label className='fs-m' htmlFor='amount'>
            Amount
          </label>
          <div className='input-container rounded'>
            <input
              placeholder='0.00'
              className='fs-l ff-2 tc-h'
              id='amount'
              onChange={(e: any) =>
                setStake({ ...stake, amount: e.target.value })
              }
              value={stake.amount}
              type='number'
            />
            <div className='df-sb'>
              <div
                className={`max-btn mr-1 ${stake.isMax && 'active'}`}
                onClick={setMaxBalance}
              >
                Max
              </div>
            </div>
          </div>
        </div>
        <div className='df-sb mb-2 stake-input-container'>
          <label className='fs-m' htmlFor='lock-time'>
            Choose Lock Time
          </label>
          <div className='input-container rounded'>
            <input
              className='fs-l ff-2 tc-h'
              id='lock-time'
              type='date'
              onChange={(e) => setStake({ ...stake, lockTime: e.target.value })}
            />
            <label className='fs-l mr-1' htmlFor='lock-time'>
              <img src='/assets/icons/ico.calendar.svg' alt='' />
            </label>
          </div>
        </div>
        <div className='mb-2 df-sb range-container'>
          {weeks.map((week: any) => (
            <div
              key={week.id}
              className={`range-selector-btn max-btn ${
                stake.week === week.value && 'active'
              }`}
              onClick={() => setWeek(week.value)}
            >
              {width > 430 ? week.name[0] : week.name[1]}
            </div>
          ))}
        </div>
        <div className='range-input-container df-sb mb-5'>
          <input
            className='range-input '
            type='range'
            onChange={(e: any) => setStake({ ...stake, week: e.target.value })}
            min={0}
            max={weeks[weeks.length - 1].value}
            value={stake.week}
          />
          <div className='info df-c'>
            <p className='tc-s fs-xs'>
              <span className='tc-h fs-xs fw-b'>{stake.week}</span> Week(s)
            </p>
          </div>
        </div>
        <button className='btn-primary' onClick={submitStake}>
          Create Stake
        </button>
        <p className='fs-xs tc-s subtitle'>
          Your starting voting power will be 0.00 MOZ!
        </p>
      </div>
      <style jsx>
        {`
          .input-container input {
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
            width: ${width > 590 ? '60%' : '100%'};
            padding-right: 8px;
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

          input[type='date']::-webkit-calendar-picker-indicator {
            display: none;
            -webkit-appearance: none;
            width: 15px;
            padding: 0px;
            margin: 0px;
            margin-top: 10px;
          }

          .token-name-container {
            width: 100px;
            justify-content: ${width > 480 ? 'start' : 'end'};
          }

          .stake-form-container {
            display: flex;
            flex-direction: column;
            margin: 30px 0px 60px 0px;
            background-color: #ffffff10;
            padding: ${width > 768 ? '36px 100px' : '36px 30px'};
            flex-wrap: wrap;
          }

          .stake-input-container {
            ${width < 590 && 'flex-direction: column;'}
          }

          .range-container {
            flex-wrap: wrap;
            gap: 10px;
          }

          .range-selector-btn {
            display: flex;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            width: ${width > 600 ? '32%' : width > 430 ? '48%' : '20%'};
            padding: 16px 30px;
            border-radius: 30px;
          }

          .range-input-container {
            justify-content: center;
            align-items: center;
          }

          .range-input {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            border-radius: 6px;
            background: #c4c4c420;
            outline: none;
            opacity: 0.7;
            -webkit-transition: 0.2s;
            transition: opacity 0.2s;
          }

          .range-input:hover {
            opacity: 1;
          }

          .range-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 10px;
            width: 15px;
            height: 15px;
            background: var(--primaryColor);
            cursor: pointer;
          }

          .range-input::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: var(--primaryColor);
            cursor: pointer;
          }

          .btn-primary {
            width: 190px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 16px;
          }

          .info {
            width: 130px;
          }

          .subtitle {
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
    </>
  );
}
