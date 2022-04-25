import { useEffect, useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ProgressBar from '../../commons/ProgressBar';
import Separator from '../../commons/Separator';

const AvailableBondTable = ({ items, openBond }: any) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Separator />
      <table>
        {width > 530 ? (
          <colgroup>
            <col span={1} style={{ width: 36 + '%' }}></col>
            <col span={1} style={{ width: 18 + '%' }}></col>
            <col span={1} style={{ width: 14 + '%' }}></col>
            <col span={1} style={{ width: 14 + '%' }}></col>
            <col span={1} style={{ width: 18 + '%' }}></col>
          </colgroup>
        ) : (
          <colgroup>
            <col span={1} style={{ width: 38 + '%' }}></col>
            <col span={1} style={{ width: 15 + '%' }}></col>
            <col span={1} style={{ width: 30 + '%' }}></col>
            <col span={1} style={{ width: 15 + '%' }}></col>
          </colgroup>
        )}

        <thead>
          <tr>
            <th>
              <div className='bond'>
                <img
                  className={`${width > 530 ? 'ml-4' : 'ml-1'}`}
                  src='/assets/icons/ico.bondbadge.svg'
                  alt=''
                />
                <p className='table-header table-title tc-s'>Bond</p>
              </div>
            </th>
            <th>
              <div>
                <p className='table-header table-title tc-s'>Price</p>
              </div>
            </th>
            <th>
              <div>
                <p className='table-header table-title tc-s df-c'>
                  {width > 530 ? 'ROI' : 'ROI & TVP'}
                </p>
              </div>
            </th>
            {width > 530 && (
              <th>
                <div>
                  <p className='table-header table-title tc-s df-c'>TBV</p>
                </div>
              </th>
            )}
            <th>
              <div>
                <p className='table-header table-title tc-s df ai-c jc-e'></p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <tr key={item.id}>
              <td>
                <div className='table-body token-name'>
                  {width > 650 &&
                    item.icoSrc.map((ico: any, i: any) => (
                      <img className='ico' key={i} src={ico} alt='' />
                    ))}
                  <p className='mr-0'>{item.bondName}</p>
                </div>
              </td>
              <td>
                <div className='table-body'>
                  {width > 700 && (
                    <img
                      className='ico'
                      src='/assets/icons/tokens/ico.token.moz.svg'
                      alt=''
                    />
                  )}
                  <div>
                    <p className='t-b'>${item.price}</p>
                    <p className='fs-xs tc-p'>${item.marketPrice} Market</p>
                  </div>
                </div>
              </td>
              {width > 530 ? (
                <>
                  <td>
                    <div className='table-body df-c'>
                      <p
                        style={
                          item.roi < 0
                            ? { color: 'var(--alert)', margin: 0 }
                            : { margin: 0 }
                        }
                      >
                        {item.roi}%
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className='table-body df ai-c jc-c'>
                      <div className='df-ca df fd-c ai-c jc-c mr-0'>
                        <p className='ta-c mr-0 w-100'>{item.tbv}</p>
                        {width > 530 && (
                          <ProgressBar maxCap={100} currDep={50} />
                        )}
                      </div>
                    </div>
                  </td>
                </>
              ) : (
                <td>
                  <div className='table-body'>
                    <div style={{ marginRight: 0 + '!important' }}>
                      <p className='fs-xs mr-0'>
                        ROI: <span className='t-b tc-p fs-xs'>{item.roi}%</span>
                      </p>
                      <p className='fs-xs mr-0'>
                        TBV: <span className='t-b tc-p fs-xs'>{item.tbv}</span>
                      </p>
                    </div>
                  </div>
                </td>
              )}
              <td>
                <div className='table-body  tc-s df ai-c jc-e'>
                  {width > 580 ? (
                    <button
                      onClick={() => {
                        openBond(item.id);
                      }}
                      className='btn-primary'
                    >
                      Bond
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        openBond(item.id);
                      }}
                      className='btn-primary pl-1 pr-1 df-c'
                    >
                      <img
                        className='mr-0'
                        src='/assets/icons/bond/ico.bondbadge.svg'
                        alt=''
                      />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>
        {`
          table {
            width: 100%;
            border-collapse: collapse;
          }

          .table-body .token-name {
            flex-direction: ${width < 620 ? 'column' : 'row'};
            flex-direction: row;
          }

          td,
          th {
            text-align: left;
          }

          tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .table-header {
            padding-left: ${width > 530 ? '30px' : '10px'};
            height: 70px;
            display: flex;
            align-items: center;
          }

          .table-body {
            padding-left: ${width > 530 ? '30px' : '10px'};
            height: 80px;
            display: flex;
            align-items: center;
          }

          .table-body :first-child {
            margin-right: 16px;
          }

          th {
            height: 77px;
          }

          tr {
            width: 100%;
          }

          td {
            background-color: rgba(255, 255, 255, 0.068);
            border: none;
          }

          tr:hover {
            background-color: rgba(255, 255, 255, 0.096);
          }

          .token-name {
            font-weight: bold;
          }

          .table-title {
            font-size: smaller;
          }

          .bond {
            display: flex;
          }

          .bond p {
            padding-left: 10px;
          }

          .ico {
            height: 32px;
            width: 32px;
            margin-right: 5px !important;
          }
        `}
      </style>
    </>
  );
};

export default AvailableBondTable;
