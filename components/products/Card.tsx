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
              <h3 className='ct-t mt-3'>{name}</h3>
            </div>
          </div>
          <div className='card-body pb-1'>
            <div className='card-body-container'>
              <div className='token-ico-container'>
                {tokens.map((token) => (
                  <img
                    className='token-ico mr-1'
                    key={token.id}
                    src={token.icoSrc}
                  ></img>
                ))}
              </div>
              <div className='value-display'>
                <div className='sshape'></div>
                <section>
                  <p className='subtitle'>Current Projected Yield (APY)</p>
                  <p className='num1'>{currentProjectYield}%</p>
                </section>
              </div>
              <div className='value-display'>
                <div className='sshape'></div>
                <section>
                  <p className='subtitle'>24h price change</p>
                  <p className='num1'>{priceChange}%</p>
                </section>
              </div>
              <div className='spacer'>
                <DepositSummary
                  maxCap={maxCapacity}
                  currDep={currentDeposit}
                  currency={currency}
                />
              </div>
              <Separator />
              <div className='position-counter'>
                <p>YOUR POSITION</p>
                <p>{position ? position : '---'}</p>
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
      `}</style>
    </>
  );
};

export default Card;
