import Link from 'next/link';
import { Product } from '../../pages';
import Separator from '../commons/Separator';
import DepositSummary from './DepositSummary';

const Card = ({
  id,
  name,
  icoSrc,
  position,
  currentDeposit,
  maxCapacity,
  currentProjectYield,
  priceChange,
  currency,
  tokens,
}: Product) => {
  const productHandler = () => {
    console.log('Going to product ', id);
  };

  return (
    <>
      <Link href={`/products/${id}`}>
        <div onClick={productHandler} className='product-card-body bg-p glow-1'>
          <div className='card-title-container'>
            <div className='title-container'>
              <div className='product-image-container'>
                <img src={icoSrc} alt='' />
              </div>
              <div className='corner-img'>
                <img src='/assets/icons/products/ico.scale.svg' alt='scale' />
              </div>
              <h3 className='title ct-t mt-3'>{name}</h3>
            </div>
          </div>
          <div className='card-body'>
            <div className='card-body-container'>
              <div className='token-ico-container df-c mb-2'>
                {tokens.map((token) => (
                  <img
                    className='token-ico mr-1'
                    key={token.id}
                    src={token.icoSrc}
                  ></img>
                ))}
              </div>
              <div className='value-display'>
                <div className='vl-shape mr-2'></div>
                <section>
                  <p className='subtitle'>Current Projected Yield (APY)</p>
                  <p className='num1'>{currentProjectYield}%</p>
                </section>
              </div>
              <div className='value-display mb-2'>
                <div className='vl-shape mr-2'></div>
                <section>
                  <p className='subtitle'>24h price change</p>
                  <p className='num1'>{priceChange}%</p>
                </section>
              </div>
              <div className='mb-2 mr-2 ml-2'>
                <DepositSummary
                  maxCap={maxCapacity}
                  currDep={currentDeposit}
                  currency={currency}
                />
              </div>
              <Separator />
              <div className='position-counter df-sb mt-2 mb-1 mr-2 ml-2'>
                <p className='tc-s fw-l'>YOUR POSITION</p>
                <p className='fw-b'>{position ? position : '___'}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .product-card-body {
          position: relative;
          width: 300px;
          margin: 0;
          box-sizing: border-box;
          border-radius: 30px;
          cursor: pointer;
          transition: transform 0.25s ease, filter 0.25s linear;
        }

        .product-card-body:hover {
          transform: scale(1.05);
          filter: drop-shadow(
            0px 4px 50px
              ${name === 'Avalanche Majors'
                ? '#2EBAC680'
                : name === 'T-YVUSDC-P-ETH'
                ? '#2775CA80'
                : name === 'T-ETH-C'
                ? '#5A74D680'
                : 'rgba(255, 166, 0, 0.479)'}
          );
          z-index: 9999999;
        }

        .card-title-container {
          width: 100%;
          height: 115px;
          background-color: var(--bgSecondary);
          border-radius: 30px 30px 0 0;
          background: linear-gradient(261.36deg, #323232, #323232) padding-box,
            linear-gradient(
                112.7deg,
                rgba(190, 180, 207, 0.47) -0.94%,
                rgba(0, 0, 0, 0) 72.43%
              )
              border-box;
          border: 1px solid transparent;
        }

        .title-container {
          width: 100%;
          height: 100%;
          background-color: var(--bgSecondary);
          border-radius: 29px 29px 0 0;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.25s ease;
        }

        .title {
          transition: all 0.25s ease;
        }

        .product-card-body:hover .title-container {
          background-color: ${name === 'Avalanche Majors'
            ? '#2EBAC650'
            : name === 'T-YVUSDC-P-ETH'
            ? '#2775CA50'
            : name === 'T-ETH-C'
            ? '#5A74D650'
            : 'var(--primaryColor)'};
        }

        .product-card-body:hover .product-image-container {
          background-color: ${name === 'Avalanche Majors'
            ? '#2EBAC6'
            : name === 'T-YVUSDC-P-ETH'
            ? '#2775CA'
            : name === 'T-ETH-C'
            ? '#5A74D6'
            : 'var(--primaryColor)'};
        }

         {
          /* .product-card-body:hover .title {
          color: var(--bgPrimary);
        } */
        }

        .product-image-container {
          width: 80px;
          height: 80px;
          border-radius: 40px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -30px;
          left: 30px;
          background-color: var(--bgSecondary);
          transition: all 0.25s ease;
        }

        .corner-img {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          top: 0;
          right: 30px;
          background-color: var(--bgPrimary);
          border-radius: 0 0 10px 10px;
        }

        .card-body {
          margin: 16px;
        }

        .value-display {
          display: flex;
          align-items: center;
          width: 100%;
          background-color: var(--bgSecondary);
          margin-bottom: 10px;
          padding: 16px;
          border-radius: 20px;
        }

        .vl-shape {
          background-color: var(--primaryColor);
          width: 5px;
          height: 20px;
          border-radius: 3px;
          margin-top: -15px;
        }
      `}</style>
    </>
  );
};

export default Card;
