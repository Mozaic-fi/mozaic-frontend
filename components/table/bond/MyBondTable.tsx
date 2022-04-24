import { useEffect, useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Separator from '../../commons/Separator';

const MyBondTable = ({
  items,
  claimBond,
}: {
  items?: any;
  claimBond?: any;
}) => {
  const { height, width } = useWindowDimensions();

  const [maxAllocation, setMaxAllocation] = useState(0);

  // useEffect(() => {
  //     let max = 0;
  //     items.map((item) => item.allocation > max ? max = item.allocation : max)
  //     setMaxAllocation(max)
  // }, [])

  return (
    <>
      <Separator />
      <table>
        {width > 500 ? (
          <colgroup>
            <col span={1} style={{ width: 36 + '%' }}></col>
            <col span={1} style={{ width: 18 + '%' }}></col>
            <col span={1} style={{ width: 14 + '%' }}></col>
            <col span={1} style={{ width: 14 + '%' }}></col>
            <col span={1} style={{ width: 18 + '%' }}></col>
          </colgroup>
        ) : (
          <colgroup>
            <col span={1} style={{ width: 40 + '%' }}></col>
            <col span={1} style={{ width: 20 + '%' }}></col>
            <col span={1} style={{ width: 20 + '%' }}></col>
            <col span={1} style={{ width: 20 + '%' }}></col>
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
            {width > 500 ? (
              <>
                <th>
                  <div>
                    <p className='table-header table-title tc-s'>Claimable</p>
                  </div>
                </th>
                <th>
                  <div>
                    <p className='table-header table-title tc-s df-c'>
                      Pending
                    </p>
                  </div>
                </th>
              </>
            ) : (
              <th>
                <div>
                  <p className='table-header table-title tc-s df-c'>
                    Pending & Claimable
                  </p>
                </div>
              </th>
            )}
            <th>
              <div>
                <p className='table-header table-title tc-s df-c'>
                  Vesting Time
                </p>
              </div>
            </th>
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
                <div
                  className={`table-body token-name ${
                    width < 500 && 'ai-s jc-s'
                  }`}
                >
                  {width > 650 &&
                    item.icoSrc.map((ico: any, i: any) => (
                      <img className='ico' key={i} src={ico} alt='' />
                    ))}
                  <p className='js-c'>{item.bondName}</p>
                </div>
              </td>
              {width > 500 ? (
                <>
                  <td>
                    <div className='table-body'>
                      {width > 630 && (
                        <img
                          className='ico'
                          src='/assets/icons/tokens/ico.token.moz.svg'
                          alt=''
                        />
                      )}
                      <p className='t-b'>{item.claimable}</p>
                    </div>
                  </td>
                  <td>
                    <div className='table-body df-c'>
                      <p style={{ margin: 0 }}>{item.pending}</p>
                    </div>
                  </td>
                </>
              ) : (
                <td>
                  <div className='table-body df-c'>
                    <div style={{ marginRight: 0 + '!important' }}>
                      <p className='fs-xs mr-0'>
                        Claimable:{' '}
                        <span className='t-b tc-p fs-xs'>
                          {item.claimable}%
                        </span>
                      </p>
                      <p className='fs-xs mr-0'>
                        Pending:{' '}
                        <span className='t-b tc-p fs-xs'>{item.pending}</span>
                      </p>
                    </div>
                  </div>
                </td>
              )}
              <td>
                <div className='table-body df ai-c jc-c'>
                  <div className='df-ca df fd-c ai-c jc-c mr-0'>
                    <p className='t-ac mr-0 w-100'>
                      {item.vestingTime} {width > 450 ? 'Weeks' : 'W'}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <div className='table-body  tc-s df ai-c jc-e'>
                  {width > 560 ? (
                    <button
                      onClick={() => {
                        claimBond(item.id);
                      }}
                      className='btn-primary'
                    >
                      Claim
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        claimBond(item.id);
                      }}
                      className='btn-primary pl-1 pr-1 df-c'
                    >
                      <img
                        className='mr-0'
                        src='/assets/icons/bond/ico.claim.svg'
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

export default MyBondTable;
