import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CardContent from '../commons/card/CardContent';
import ListDetail from './ListDetail';
import Modal from './Modal';

const BondModal = ({ closeModal, bond, userData }: any) => {
  const [bondCreated, setBondCreated] = useState(false);
  const { bondContractApproved, approveBondContract } = useAuth();
  const { height, width } = useWindowDimensions();

  const submitBond = () => {
    setBondCreated(true);
  };

  return (
    <>
      <Modal
        title={`${bond.bondName} Bond`}
        closeModal={closeModal}
        w={width > 560 ? '560px' : '100%'}
      >
        {!bondCreated ? (
          <>
            <div className='bond-modal-container'>
              <div className={`info-container-bond df-sb`}>
                <div className='df-ra'>
                  <p style={{ display: 'flex' }} className='t-b'>
                    Bond Price &nbsp;{' '}
                    <span>
                      <img
                        style={{ display: 'inline-block' }}
                        className='info-btn'
                        src='/assets/icons/ico.info.svg'
                        alt=''
                      />
                    </span>{' '}
                  </p>
                  <h1 className='num-display ff-1 tc-p fs-xxxl'>
                    ${bond.price}
                  </h1>
                </div>
                <div className='df-la'>
                  <p className='t-b'>Market Price</p>
                  <h1 className='num-display ff-1 tc-p fs-xxxl'>
                    ${bond.marketPrice}
                  </h1>
                </div>
              </div>
              <div
                className={`df card-content-bg mt-3 mb-3 ${
                  width < 500 && 'fd-c'
                }`}
              >
                <CardContent
                  title='You Give'
                  titleClass='tc-s fs-s ff-d'
                  icoSrc={bond.icoSrc}
                  align={width > 500 && 'ai-s'}
                />
                <CardContent
                  title='Vested for 7 Days'
                  titleClass='tc-s fs-s ff-d'
                  icoSrc='/assets/icons/ico.time.svg'
                />
                <CardContent
                  title='You Get'
                  titleClass='tc-s fs-s ff-d'
                  icoSrc='/assets/icons/tokens/ico.token.moz.svg'
                  icoText='1.2%'
                  align={width > 500 && 'ai-e'}
                />
              </div>
              {!bondContractApproved ? (
                <div className='mt-3 mb-2'>
                  <button
                    onClick={approveBondContract}
                    className='btn-primary w-100 mb-1'
                  >
                    Approve Bond Contract
                  </button>
                  <p className='t-ac fs-xs tc-s'>
                    Important: The approve contract is needed when bonding for
                    the first time; Subsequent bonding only requires you to
                    perform the BOND request.
                  </p>
                </div>
              ) : (
                <div
                  className={`mt-3 mb-2 ${width > 400 ? 'df-sb' : 'df fd-c'}`}
                >
                  <div className='input-container'>
                    <input
                      placeholder='0.00'
                      className='fs-l ff-2 tc-p'
                      id='amount'
                      onChange={(e) => {}}
                      value=''
                      type='number'
                    />
                    <div className='df-sb'>
                      <div
                        className={`max-btn mr-1 ${true && 'active'}`}
                        onClick={() => {}}
                      >
                        Max
                      </div>
                    </div>
                  </div>
                  <button
                    style={{ height: 60 + 'px' }}
                    className='btn-primary'
                    onClick={submitBond}
                  >
                    Bond
                  </button>
                </div>
              )}
              <div>
                <ListDetail
                  infoText='hello'
                  title='Your Balance'
                  description={`0.0 ${bond.bondName} Bond`}
                />
                <ListDetail
                  infoText='hello'
                  title='You’ll Get'
                  description={`0.0 MOZ`}
                />
                <ListDetail
                  infoText='hello'
                  title='Max'
                  description={`0.123 MOZ`}
                />
                <ListDetail infoText='hello' title='ROI' description={`123%`} />
                <ListDetail
                  infoText='hello'
                  title='Vesting Term'
                  description={`7 Days`}
                />
                <ListDetail
                  title='Bond Contract'
                  description='view'
                  link='/bond-contract'
                />
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className='success-title df-c mb-5'>
              {typeof bond.icoSrc === 'object' ? (
                bond.icoSrc.map((ico: any, i: any) => (
                  <img
                    style={{ height: 48 + 'px' }}
                    className='ico'
                    key={i}
                    src={ico}
                    alt=''
                  />
                ))
              ) : (
                <img
                  style={{ height: 48 + 'px' }}
                  className='ico'
                  src={bond.icoSrc}
                  alt=''
                />
              )}
            </div>
            <div
              className={`df-sb card-content-bg mt-3 mb-3 pl-5 pr-5 pt-5 pb-5`}
            >
              <p className='tc-s t-b'>Deposit secured</p>
              <h1 className='ff-1 tc-p fs-xxxl'>8.93%</h1>
            </div>
            <div className='info-container  mb-5'>
              <div className='df-sb mb-2'>
                <p className='t-b tc-s '>Your Incoming BOND</p>
                <p className='t-ar t-b'>12.3424543453 {bond.bondName} Bond</p>
              </div>
              <div className='df-sb mb-2'>
                <p className='t-b tc-s'>Vesting Term</p>
                <p className='t-ar t-b'>7 Days</p>
              </div>
            </div>
            <p className='tc-s fs-xs t-ac mb-5'>
              Visit Mozaic anytime to claim your vested portion. The bond will
              fully vested in 7 days.
            </p>
            <button className='df-c btn-primary w-100'>
              View on AVASCAN
              <img
                className='ml-1'
                src='/assets/icons/ico.link.dark.svg'
                alt=''
              />
            </button>
          </div>
        )}
      </Modal>
      <style jsx>
        {`
          .bond-modal-container {
            max-height: 70vh;
            ${width > 500 ? 'overflow: visible;' : 'overflow: auto;'}
          }

          .card-content-bg {
            background-color: rgba(255, 255, 255, 0.1);
            ${width > 500 && 'margin-left: -24px; margin-right: -24px;'}
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
            width: ${width > 590 ? 'auto' : '100%'};
            padding-right: 8px;
            flex-grow: 1;
            ${width > 400 ? 'margin-right: 10px' : 'margin-bottom: 16px'};
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
        `}
      </style>
    </>
  );
};

export default BondModal;
