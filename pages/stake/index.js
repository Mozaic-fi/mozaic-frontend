import Link from 'next/link';
import useWindowDimensions from '../../hooks/useWindowDimension';

import Separator from '../../components/common/Separator';
import { useState } from 'react';

const Stake = () => {
  const { width } = useWindowDimensions();

  const weeks = [
    { id: 1, value: 1, name: ['1 Week', '1W'] },
    { id: 2, value: 4, name: ['1 Month', '1M'] },
    { id: 3, value: 13, name: ['3 Months', '3M'] },
    { id: 4, value: 26, name: ['6 Months', '6M'] },
    { id: 5, value: 52, name: ['1 Year', '1Y'] },
    { id: 6, value: 208, name: ['4 years', '4Y'] },
  ];

  const [stake, setStake] = useState({
    amount: 0.0,
    isMax: false,
    lockTime: '',
    week: 0,
  });

  const logData = [
    {
      id: 1,
      tokenName: 'MOZ',
      tokenAmount: 1,
      icoSrc: '/assets/icons/tokens/ico.token.moz.svg',
      year: 4,
      month: 0,
      week: 0,
      value: 1,
      valueName: 'veMOZ',
      isLocked: true,
    },
    {
      id: 2,
      tokenName: 'MOZ',
      tokenAmount: 1,
      icoSrc: '/assets/icons/tokens/ico.token.moz.svg',
      year: 3,
      month: 0,
      week: 0,
      value: 0.75,
      valueName: 'veMOZ',
      isLocked: true,
    },
    {
      id: 3,
      tokenName: 'MOZ',
      tokenAmount: 1,
      icoSrc: '/assets/icons/tokens/ico.token.moz.svg',
      year: 2,
      month: 0,
      week: 0,
      value: 0.5,
      valueName: 'MOZ',
      isLocked: true,
    },
    {
      id: 4,
      tokenName: 'MOZ',
      tokenAmount: 1,
      icoSrc: '/assets/icons/tokens/ico.token.moz.svg',
      year: 2,
      month: 0,
      week: 0,
      value: 0.25,
      valueName: 'veMOZ',
      isLocked: true,
    },
  ];

  const infoData = {
    veMozHolderAPY: 4.17,
    veMozBalance: 0,
    totalLockedMoz: 410098999.23,
    totalVeMoz: 321131312.21,
    averageLockTime: 3.64,
    nextDistribution: 'Thu, 20 Feb 2022, 14:43:59 GMT',
    tlv: 121232122.32,
  };

  const setWeek = (week) => {
    setStake({ ...stake, week: week });
  };

  const submitStake = () => {
    console.log(stake);
  };

  return (
    <>
      <div className='container'>
        <div className='page-title '>
          <h1 className='tc-s'>Stake</h1>
        </div>
        <div className='log-display mb-5'>
          {logData.map((log) => (
            <div key={log.id} className='log-item'>
              <div className='df-c fd-r token-name-amount'>
                <p className='log-ff tc-s'>
                  {log.tokenAmount}{' '}
                  {width > 560 ? <span>&emsp;&emsp;</span> : ' '}
                </p>
                <img
                  className={width > 590 ? 'mr-5' : 'ml-2 mr-2'}
                  src={log.icoSrc}
                  alt=''
                />
                <p className='tc-s log-ff'> {log.tokenName}&nbsp;</p>
              </div>
              <p className='tc-s log-ff'>
                <span className='tc-p log-ff'>
                  {log.isLocked ? 'LOCKED' : 'UNLOCKED'}{' '}
                </span>
                <span className='tc-s'>&nbsp; for &nbsp;</span>
                <span className='tc-p log-ff'>
                  {log.year
                    ? log.year + ' Year(s) '
                    : log.month
                    ? log.month + ' Month(s) '
                    : log.week
                    ? log.week + ' week(s) '
                    : undefined}
                </span>
                <span className='tc-s log-ff'>
                  {width > 560 && <span>&emsp;</span>} ={' '}
                  {width > 560 && <span>&emsp;&emsp;</span>}
                </span>
                <span className='tc-p log-ff'>
                  {log.value}
                  {log.valueName}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className={`stake-details df-sb ${width < 780 && 'fd-c'}`}>
          <div className={`pl-2 pr-2 ${width > 780 ? 'w-50' : 'w-100'}`}>
            <div className='w-100'>
              <div className='df-sb mb-2'>
                <p className='tc-s'>veMOZ Holder APY:</p>
                <p className='tc-p t-b data'>{infoData.veMozHolderAPY}%</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>veMOZ Balance:</p>
                <p className='tc-p t-b data'>{infoData.veMozBalance}</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Total veMOZ:</p>
                <p className='tc-p t-b data'>{infoData.totalVeMoz}</p>
              </div>
            </div>
            <div className='mb-5 '>
              <Link href='/staking-moz-guide'>
                <a className='df-c fs-s tc-p link-container-right'>
                  Guide to staking MOZ
                  <img
                    className='ml-1'
                    src='/assets/icons/ico.openlink.svg'
                    alt=''
                  />{' '}
                </a>
              </Link>
            </div>
          </div>
          <div className={`pl-2 pr-2 ${width > 780 ? 'w-50' : 'w-100'}`}>
            <div className='w-100'>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Total MOZ Locked:</p>
                <p className='tc-p t-b data'>{infoData.totalLockedMoz}</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Average Lock Time:</p>
                <p className='tc-p t-b data'>
                  {infoData.averageLockTime} Years
                </p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Next Distribution:</p>
                <p className='tc-p t-b data'>{infoData.nextDistribution}</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>TLV:</p>
                <p className='tc-p t-b data'>${infoData.tlv}</p>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <div className='stake-form-container'>
            <div className='df-sb mb-2 stake-input-container'>
              <label className='fs-m' htmlFor='amount'>
                Amount
              </label>
              <div className='input-container'>
                <input
                  placeholder='0.00'
                  className='fs-l ff-2 tc-p'
                  id='amount'
                  onChange={(e) =>
                    setStake({ ...stake, amount: e.target.value })
                  }
                  value={stake.amount}
                  type='number'
                />
                <div className='df-sb'>
                  <div
                    className={`max-btn mr-1 ${stake.isMax && 'active'}`}
                    onClick={() => setStake({ ...stake, isMax: !stake.isMax })}
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
              <div className='input-container'>
                <input
                  className='fs-l ff-2 tc-p'
                  id='lock-time'
                  type='date'
                  onChange={(e) =>
                    setStake({ ...stake, lockTime: e.target.value })
                  }
                />
                <label className='fs-l mr-1' htmlFor='lock-time'>
                  <img src='/assets/icons/ico.calendar.svg' alt='' />
                </label>
              </div>
            </div>
            <div className='mb-2 df-sb range-container'>
              {weeks.map((week) => (
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
                onChange={(e) => setStake({ ...stake, week: e.target.value })}
                min={0}
                max={weeks[weeks.length - 1].value}
                value={stake.week}
              />
              <div className='info df-c'>
                <p className='tc-s fs-xs'>
                  <span className='tc-p fs-xs t-b'>{stake.week}</span> Week(s)
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
        </div>
      </div>
      <style jsx>
        {`
          .log-display {
            box-sizing: border-box;
            background-color: #00000030;
            width: 100%;
            padding: 36px ${width > 680 ? '72px' : '16px'};
          }

          .log-item {
            display: flex;
            align-items: center;
            margin: 12px 0px;
          }

          .token-name-amount {
            width: fit-content;
          }

          .stake-details {
            align-items: flex-start;
          }

          .data {
            text-align: right;
          }

          .link-container-left {
            justify-content: ${width > 780
              ? 'left !important'
              : 'right !important'};
          }

          .link-container-right {
            justify-content: right !important;
          }

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
          }

          .range-selector-btn {
            display: flex;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            width: ${width > 1195
              ? '140px'
              : width > 600
              ? '30%'
              : width > 430
              ? '45%'
              : '20%'};
            padding: 16px 30px;
            border-radius: 30px;
            margin: 8px;
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
            background: #ffbb00;
            cursor: pointer;
          }

          .range-input::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: #ffbb00;
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
};

export default Stake;
