import Link from 'next/link';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useState } from 'react';
import Separator from '../../components/commons/Separator';
import { infoData, logData, weeks } from '../../data/StakeData';
import Head from 'next/head';
import StakeOptions from '../../components/stake/StakeOptions';
import StakeForm from '../../components/stake/StakeForm';

const Stake = () => {
  const { width } = useWindowDimensions();

  const [stake, setStake] = useState({
    amount: 0.0,
    lockTime: '',
    week: 0,
  });

  const setWeek = (week: any) => {
    setStake({ ...stake, week: week });
  };

  // set submit stake function

  const submitStake = () => {
    console.log(stake);
  };

  return (
    <>
      <Head>
        <title>Mozaic - Stake</title>
        <meta name='description' content='Mozaic dapp' />
      </Head>
      <div className='container'>
        <div className='page-title'>
          <h1 className='pt-t ml-a mr-a'>Stake</h1>
        </div>
        <StakeOptions logData={logData} />
        <div className={`stake-details df-sb ${width < 780 && 'fd-c'}`}>
          <div className={`pl-2 pr-2 ${width > 780 ? 'w-50' : 'w-100'}`}>
            <div className='w-100'>
              <div className='df-sb mb-2'>
                <p className='tc-s'>veMOZ Holder APY:</p>
                <p className='tc-h fw-b data'>{infoData.veMozHolderAPY}%</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>veMOZ Balance:</p>
                <p className='tc-h fw-b data'>{infoData.veMozBalance}</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Total veMOZ:</p>
                <p className='tc-h fw-b data'>{infoData.totalVeMoz}</p>
              </div>
            </div>
            <div className='mb-5 '>
              <Link href='/staking-moz-guide'>
                <a className='df-c fs-s tc-h link-container-right'>
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
                <p className='tc-h fw-b data'>{infoData.totalLockedMoz}</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Average Lock Time:</p>
                <p className='tc-h fw-b data'>
                  {infoData.averageLockTime} Years
                </p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>Next Distribution:</p>
                <p className='tc-h fw-b data'>{infoData.nextDistribution}</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='tc-s'>TLV:</p>
                <p className='tc-h fw-b data'>${infoData.tlv}</p>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <StakeForm
          stake={stake}
          setStake={setStake}
          weeks={weeks}
          setWeek={setWeek}
          submitStake={submitStake}
        />
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
};

export default Stake;
