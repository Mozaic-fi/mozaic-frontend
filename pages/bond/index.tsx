import { useState } from 'react';
import CardContent from '../../components/commons/card/CardContent';
import AvailableBondTable from '../../components/table/bond/AvailableBondTable';
import MyBondTable from '../../components/table/bond/MyBondTable';
import { availableBonds, bondInfo, myBond } from '../../data/BondData';
import BondModal from '../../components/modals/BondModal';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Head from 'next/head';
import { useWeb3React } from '@web3-react/core';

const Bond = () => {
  const web3reactContext = useWeb3React();

  const { height, width } = useWindowDimensions();
  const [openBondModal, setOpenBondModal] = useState(false);
  const [bondData, setBondData] = useState({});

  const openBond = (id: any) => {
    setBondData(availableBonds.filter((bond) => bond.id === id)[0]);
    setOpenBondModal(true);
  };

  return (
    <>
      <Head>
        <title>Mozaic - Bond</title>
        <meta name='description' content='Mozaic dapp' />
      </Head>

      <div className='container bond-header'>
        <div className='page-title w-100 df-sb'>
          <div className='flex-1 df'>
            <img
              className='title-icon'
              src='/assets/icons/bond/ico.bondBadge.svg'
              alt=''
            />
            <h1 className='pt-t'>Bond</h1>
          </div>
          <div
            className={`summary-container bg-w20 flex-1 blur-bg-1 pt-5 pb-5 pr-5 pl-5 rounded ${
              width > 860 ? 'df-sb' : 'df ai-c js-c fd-c'
            }`}
          >
            <div className={`${width > 860 ? 'df-ra' : 'df-ca'}`}>
              <p style={{ display: 'flex' }} className='fw-b'>
                Treasury Balance &nbsp;{' '}
                <span>
                  <img
                    style={{ display: 'inline-block' }}
                    className='info-btn'
                    src='/assets/icons/bond/ico.info.svg'
                    alt=''
                  />
                </span>{' '}
              </p>
              <h1 className='fs-xxl fw-b tc-h'>${bondInfo.treasuryBalance}</h1>
            </div>
            <div className={`${width > 860 ? 'df-la' : 'df-ca'}`}>
              <p className='fw-b'>MOZ Price</p>
              <h1 className='fs-xxl fw-b tc-h'>${bondInfo.mozPrice}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {web3reactContext.account && (
          <>
            {myBond && (
              <>
                <div className='page-title '>
                  <h2 className='tc-s fs-xl fw-r ta-c w-100'>My Bonds</h2>
                </div>
                <div className=''>
                  <MyBondTable items={myBond} />
                </div>
              </>
            )}
          </>
        )}
        <div className='page-title '>
          <h2 className='tc-s fs-xl fw-r ta-c w-100'>Available Bonds</h2>
        </div>
        <div className=''>
          <AvailableBondTable items={availableBonds} openBond={openBond} />
        </div>
        <div className='bg-p mt-5 p-t5 rounded w-100 df fd-c jc-c ai-c'>
          <div className={`df jc-c ai-s ${width < 768 && 'fd-c'}`}>
            <CardContent
              title='exchange your lp'
              icoSrc={availableBonds[1].icoSrc}
              description='Exchange available LP tokens for governance token at below market rate Bonds.'
            />
            <CardContent
              title='linear vesting'
              icoSrc='/assets/icons/bond/ico.time.svg'
              description='Once you receive a  Bond, you are able to vest at any time within the vesting period.'
            />
            <CardContent
              title='below market rate roi'
              icoSrc='/assets/icons/tokens/ico.token.moz.svg'
              icoText='1.2%'
              description='To receive a below market rate swap, find your desired Bond with a positive discount rate.'
            />
          </div>
          <a
            rel='noreferrer'
            style={{ width: 200 + 'px' }}
            className='btn-primary mb-5 df-c'
            target='_blank'
            href='https://docs.mozaic.finance/mozaic-protocol-1/bonding '
          >
            READ THE DOCS
          </a>
        </div>
        {openBondModal && (
          <BondModal closeModal={setOpenBondModal} bond={bondData} />
        )}
      </div>

      <style jsx>
        {`
          .title-icon {
            height: 70px;
            margin-top: auto;
            margin-bottom: auto;
          }

          .pt-t {
            margin: 0;
            margin-left: 20px;
          }

          .summary-container {
            box-sizing: border-box;
            padding: 48px;
            width: ${width > 720 ? '50%' : '100%'};
            height: max-content;
            border-radius: 55px;
          }

          @media screen and (max-width: 720px) {
            .page-title {
              flex-direction: column !important;
              gap: 30px;
            }

            .product-title {
              margin-bottom: 60px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Bond;
