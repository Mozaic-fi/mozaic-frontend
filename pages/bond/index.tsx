import { useState } from 'react';
import CardContent from '../../components/commons/card/CardContent';
import AvailableBondTable from '../../components/table/bond/AvailableBondTable';
import MyBondTable from '../../components/table/bond/MyBondTable';
// import BondModal from '../../components/modals/BondModal';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Bond = () => {
  const { height, width } = useWindowDimensions();
  const [openBondModal, setOpenBondModal] = useState(false);
  const [bondData, setBondData] = useState({});
  const userData = {};

  const availableBonds = [
    {
      id: 1,
      bondName: 'USDC',
      icoSrc: ['/assets/icons/tokens/ico.token.usdc.svg'],
      price: 182.2,
      marketPrice: 164.7,
      roi: 0.25,
      tbv: 122324.3,
    },
    {
      id: 2,
      bondName: 'MOZ-AVAX LP',
      icoSrc: [
        '/assets/icons/tokens/ico.token.moz.svg',
        '/assets/icons/tokens/ico.token.avax.svg',
      ],
      price: 165.8,
      marketPrice: 164.7,
      roi: -0.17,
      tbv: 43234.5,
    },
  ];

  const myBond = [
    {
      id: 1,
      bondName: 'USDC',
      icoSrc: ['/assets/icons/tokens/ico.token.usdc.svg'],
      claimable: 0.0,
      pending: 22.4324,
      vestingTime: 3,
    },
    {
      id: 2,
      bondName: 'MOZ-AVAX LP',
      icoSrc: [
        '/assets/icons/tokens/ico.token.moz.svg',
        '/assets/icons/tokens/ico.token.avax.svg',
      ],
      claimable: 21.532,
      pending: 1.2342,
      vestingTime: 87,
    },
  ];

  const openBond = (id: any) => {
    setBondData(availableBonds.filter((bond) => bond.id === id)[0]);
    setOpenBondModal(true);
  };

  return (
    <>
      <div className='prod-header'>
        <div className='container product-in-depth'>
          <div className='product-title'>
            <img src='/assets/icons/bond/ico.bondBadge.svg' alt='' />
            <h1>Bond</h1>
          </div>
          <div
            className={`info-container-bond ${
              width > 480 ? 'df-sb' : 'df ai-c js-c fd-c'
            }`}
          >
            <div className={`${width > 480 ? 'df-ra' : 'df-ca'}`}>
              <p style={{ display: 'flex' }} className='t-b'>
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
              <h1 className='num-display ff-1 tc-p'>$123152312.37</h1>
            </div>
            <div className={`${width > 480 ? 'df-la' : 'df-ca'}`}>
              <p className='t-b'>MOZ Price</p>
              <h1 className='num-display ff-1 tc-p'>$213.95</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {myBond && (
          <>
            <div className='page-title '>
              <h1 className='tc-s'>my bonds</h1>
            </div>
            <div className=''>
              <MyBondTable items={myBond} />
            </div>
          </>
        )}
        <div className='page-title '>
          <h1 className='tc-s'>available bonds</h1>
        </div>
        <div className=''>
          <AvailableBondTable items={availableBonds} openBond={openBond} />
        </div>
        <div className='bg-p mt-5 rounded w-100 df fd-c jc-c ai-c'>
          <div className={`df ${width < 768 && 'fd-c'}`}>
            <CardContent
              title='exchange your lp'
              icoSrc={availableBonds[1].icoSrc}
              description='Exchange available LP tokens for governance token at below market rate Bonds.'
            />
            <CardContent
              title='linear vesting'
              icoSrc='/assets/icons/ico.time.svg'
              description='Once you receive a  Bond, you are able to vest at any time within the vesting period.'
            />
            <CardContent
              title='below market rate roi'
              icoSrc='/assets/icons/tokens/ico.token.moz.svg'
              icoText='1.2%'
              description='To receive a below market rate swap, find your desired Bond with a positive discount rate.'
            />
          </div>
          <button style={{ width: 200 + 'px' }} className='btn-primary mb-5'>
            READ THE DOCS
          </button>
        </div>
        {/* {openBondModal && (
          <BondModal closeModal={setOpenBondModal} bond={bondData} />
        )} */}
      </div>

      <style jsx>
        {`
          .prod-header {
            display: flex;
          }
          .prod-header .container {
            height: 160px;
            width: 1170px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .prod-header .product-title {
            display: flex;
            align-items: center;
          }

          .prod-header .product-title img {
            height: 60px;
            margin-right: 30px;
          }

          .prod-header .product-title h1 {
            font-size: 3.75rem;
            font-weight: 200;
            color: var(--textSecondary);
            opacity: 0.4;
          }

          .info-container-bond {
            box-sizing: border-box;
            padding: 4px;
            width: ${width > 768 ? '50%' : '100%'};
            height: max-content;
            border-radius: 55px;
          }

          .num-display {
            font-size: 2.8rem;
          }
        `}
      </style>
    </>
  );
};

export default Bond;
