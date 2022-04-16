import { useState, useEffect, SyntheticEvent } from 'react';
import Chart from '../../components/chart/Chart';
import Card from '../../components/commons/card/Card';
import CounterCardContent from '../../components/commons/card/CounterCardContent';
import SelectOptions from '../../components/commons/SelectOptions';
import WithdrawModal from '../../components/modals/WithdrawModal';
import CompactTable from '../../components/table/CompactTable';
import MatrixTable from '../../components/table/MatrixTable';
import Table from '../../components/table/Table';
import {
  dataType,
  productData,
  filterByDataType,
  filterByTime,
  investmentTitles,
  bottomCardContent,
} from '../../data/ProductInDepthData';
import useWindowDimensions from '../../hooks/useWindowDimensions';
const Product = () => {
  const { height, width } = useWindowDimensions();
  const calculatedCardWidth =
    width < 670 ? '100%' : width < 910 ? '45%' : width < 1110 ? '30%' : '260px';

  const [selectedOption, setselectedOption] = useState(
    filterByDataType[0].value
  );
  const [selectedRange, setSelectedRange] = useState(filterByTime[0].value);

  // check which modal is open

  const [isOpenWM, setIsOpenWM] = useState(false);
  const [isOpenDM, setIsOpenDM] = useState(false);
  const [currentDataStream, setCurrentDataStream] = useState<any>(null);

  // tab selection

  const [selectedTab, setSelectedTab] = useState<any>('1');

  const selectTab = (e: any): void => {
    console.log(e.target.classList);

    if (e.target.classList.contains('1')) {
      setSelectedTab('1');
    } else if (e.target.classList.contains('2')) {
      setSelectedTab('2');
    }
  };

  const handleWD = (whichOne: number) => {
    if (whichOne === 0) {
      setIsOpenWM(false);
      setIsOpenDM(true);
    }
    if (whichOne === 1) {
      setIsOpenDM(false);
      setIsOpenWM(true);
    }
  };

  // for selecting data stream to display on chart

  useEffect(() => {
    selectedOption === 'ip'
      ? setCurrentDataStream(productData.ip)
      : selectedOption === 'aum'
      ? setCurrentDataStream(productData.aum)
      : selectedOption === 'apy'
      ? setCurrentDataStream(productData.apy)
      : null;
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <>
      {currentDataStream && (
        <>
          <div className='container header-container'>
            {/* product info card */}

            <div className='product-info-container'>
              <div className='product-info bg-s'>
                <div className='product-header'>
                  <img
                    className='product-icon'
                    src={productData.icoSrc}
                    alt=''
                  />
                  <h2 className='product-name fs-xxl tc-s fw-l'>
                    {productData.name}
                  </h2>
                </div>
                <div className='info-container bg-p'>
                  <div>
                    <p className='fw-b fs-s tc-h'>{currentDataStream.name}</p>
                    <div className='about-product'>
                      <h1 className='ff-1 fs-xxl'>
                        ${currentDataStream.value}
                      </h1>
                      <div className='df-sb'>
                        <p
                          className={`fs-s fw-b ${
                            currentDataStream.monthlyReturn < 0
                              ? 'tc-alert'
                              : 'tc-positive'
                          }`}
                        >
                          {currentDataStream.monthlyReturn
                            ? currentDataStream.monthlyReturn
                            : '---'}
                        </p>
                        <p className='fs-s tc-hd'>Past {selectedRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* withdraw & deposit button */}

              <div className='button-container-dw'>
                <button onClick={() => handleWD(0)} className='btn-left'>
                  Deposit
                </button>
                {/* {isOpenDM && (
                  <DepositModal
                  closeModal={setIsOpenDM}
                  availableToken={productData.tokens}
                  tokenName={productData.tokenName}
                  />
                )} */}
                <button onClick={() => handleWD(1)} className='btn-right'>
                  Withdraw
                </button>
                {isOpenWM && (
                  <WithdrawModal
                    closeModal={setIsOpenWM}
                    availableToken={productData.tokens}
                    tokenName={productData.tokenName}
                  />
                )}
              </div>
            </div>

            {/* chart */}

            <div className='chart-container'>
              {/* chart filter */}

              <div className='filter'>
                <SelectOptions
                  options={filterByDataType}
                  selectedVal={selectedOption}
                  setSelectedVal={setselectedOption}
                  type='dropdown'
                />
                <SelectOptions
                  options={filterByTime}
                  selectedVal={selectedRange}
                  setSelectedVal={setSelectedRange}
                  type='range'
                />
              </div>

              {/* chart */}

              <div className='chart-graph-container'>
                {selectedOption && (
                  <Chart
                    dataSource={currentDataStream.data}
                    filter={selectedRange}
                  />
                )}
              </div>
            </div>
          </div>
          <div className=' container'>
            {/* summary cards */}

            <div className='card-container-p'>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.predictedapy.svg'
                  title='PREDICTED APY'
                  counter={productData.summary.predictedApy}
                />
              </Card>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.lastmonthsapy.svg'
                  title='LAST MONTHS AVERAGE APY'
                  counter={productData.summary.lastMonthsAverageApy}
                />
              </Card>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.avaragemonthlyreturn.svg'
                  title='Avarage monthly return'
                  counter={`${productData.summary.averageMonthlyReturn}%`}
                />
              </Card>
              <Card w={calculatedCardWidth}>
                <CounterCardContent
                  icoSrc='/assets/icons/productindepth/ico.managedassets.svg'
                  title='Assets under management'
                  counter={`$${productData.summary.assetsUnderManagement}`}
                />
              </Card>
            </div>

            {/* table selection tab */}

            <div className='tab-container df-c mb-5'>
              <div
                onClick={selectTab}
                className={`tab-btn 1 pl-5 pr-5 pb-1 ${
                  selectedTab === '1' ? 'active' : ''
                }`}
              >
                <p className='tc-s 1'>Tokens</p>
              </div>
              <div
                onClick={selectTab}
                className={`tab-btn 2 pl-5 pr-5 pb-1 ${
                  selectedTab === '2' ? 'active' : ''
                }`}
              >
                <p className='tc-s 2'>Return Metrix</p>
              </div>
            </div>

            {/* tables */}

            <div className='table'>
              {selectedTab === '1' && (
                <>
                  {width > 670 ? (
                    <Table
                      titles={investmentTitles}
                      items={productData.tokens}
                    />
                  ) : (
                    <CompactTable items={productData.tokens} />
                  )}
                </>
              )}
              {selectedTab === '2' && (
                <>
                  <MatrixTable matrix={productData.matrix} />
                </>
              )}
            </div>
            <div className='card-container-p'>
              {bottomCardContent.map((content) => (
                <Card
                  key={content.id}
                  type='secondary'
                  h='auto'
                  d='block'
                  p='30px'
                >
                  <>
                    <h2 className='ff-1 tc-p mb-2'>{content.title}</h2>
                    <p className='tc-s fs-s'>{content.description}</p>
                  </>
                </Card>
              ))}
            </div>
            <div className='space'></div>
          </div>
        </>
      )}

      <style jsx>
        {`
          .header-container {
            display: flex;
            margin-top: 150px;
            flex-direction: row;
            gap: 30px;

            .product-info-container {
              width: 270px;
              display: flex;
              flex-direction: column;
            }

            .product-info {
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              width: 100%px;
              justify-content: center;
              align-items: center;
              padding: 8px;
              margin: 0;
              margin-bottom: 24px;
            }

            .product-header {
              display: flex;
              flex-direction: column;
              align-items: center;

              .product-icon {
                width: 74px;
                margin-top: 24px;
                margin-bottom: 20px;
              }

              .product-name {
                text-align: center;
                line-height: 100%;
              }
            }

            .info-container {
              margin-top: 24px;
              padding: 16px;
              box-sizing: border-box;
              width: 100%;
              border-radius: 5px;
            }

            .filter {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: end;
            }

            .button-container-dw {
              box-sizing: border-box;
              padding: 4px;
              width: 80%;
              width: 270px;
              height: max-content;
              background: linear-gradient(95.03deg, var(--bgPrimary), #2f2d33)
                  padding-box,
                linear-gradient(
                    95.26deg,
                    var(--primaryColor) 5.57%,
                    rgba(0, 0, 0, 0) 97.7%
                  )
                  border-box;
              border: 1px solid transparent;
              border-radius: 53px;
            }

            button {
              cursor: pointer;
              border: none;
              transition: all 0.5s ease;
            }

            .btn-left {
              font-size: 0.96rem;
              font-weight: bold;
              position: static;
              border-radius: 35px 0 0 35px;
              height: 50px;
              width: 50%;
              background-color: var(--primaryColor);
              color: var(--bgPrimary);
              &:hover {
                background-color: var(--primaryColorGlow);
              }
            }

            .btn-right {
              font-size: 0.96rem;
              font-weight: bold;
              position: static;
              border-radius: 0 35px 35px 0;
              height: 50px;
              width: 50%;
              background-color: var(--bgPrimary);

              &:hover {
                background-color: rgba(47, 45, 51, 0.079);
              }
            }
          }

          .chart-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: end;

            .chart-graph-container {
              width: 100%;
              height: 100%;
            }
          }

          .card-container-p {
            flex-basis: 100%;
            margin-top: 30px;
            margin-bottom: 30px;
            display: flex;
            gap: 30px;
            justify-content: space-between;
            width: 100%;
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;
          }

          .tab-container {
            .tab-btn {
              cursor: pointer;

              &.active {
                border-bottom: 3px solid var(--primaryColor);

                & > p {
                  font-weight: bold;
                  color: var(--primaryColor);
                }
              }
            }
          }

          .table {
            width: 100%;
          }

          @media screen and (max-width: 1160px) {
            .card-container-p {
              justify-content: center;
            }
          }

          @media screen and (max-width: 960px) {
            .chart-container {
              align-items: center;
            }

            .filter {
              display: flex;
              flex-direction: column;
            }
          }

          @media screen and (max-width: 680px) {
            .header-container {
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-top: 120px;

              .product-info-container {
                width: 100%;
              }

              .product-header {
                display: flex;
                flex-direction: row;
                gap: 30px;
                align-items: center;
                justify-content: center;
                margin-top: 24px;
                margin-bottom: 20px;
                width: min-content;

                .product-icon {
                  margin-top: 0px;
                  margin-bottom: 0px;
                }

                .product-name {
                  text-align: left;
                  line-height: 100%;
                }
              }

              .button-container-dw {
                width: 100%;
              }
            }
            .card-container-p {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Product;
