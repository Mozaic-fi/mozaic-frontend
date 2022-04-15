import { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ProgressBar from '../commons/ProgressBar';
import Separator from '../commons/Separator';

const MatrixTable = ({
  matrix,
}: any | { id: any; name: string; value: string | number }[]) => {
  const { height, width } = useWindowDimensions();

  const matrixTitles = [
    {
      name: 'Return Month-to-date',
      icoSrc: '/assets/icons/productindepth/metrix/ico.returnmonth.svg',
    },
    {
      name: 'Return Quarter-to-date',
      icoSrc: '/assets/icons/productindepth/metrix/ico.returnquarter.svg',
    },
    {
      name: 'Return Year-to-Date',
      icoSrc: '/assets/icons/productindepth/metrix/ico.returnyear.svg',
    },
    {
      name: 'Return Inception-to-Date',
      icoSrc: '/assets/icons/productindepth/metrix/ico.returninception.svg',
    },
    {
      name: 'Average Month',
      icoSrc: '/assets/icons/productindepth/metrix/ico.avaragemonth.svg',
    },
    {
      name: 'Best Month',
      icoSrc: '/assets/icons/productindepth/metrix/ico.bestmonth.svg',
    },
    {
      name: 'Worst Month',
      icoSrc: '/assets/icons/productindepth/metrix/ico.worstmonth.svg',
    },
    {
      name: 'Positive Months',
      icoSrc: '/assets/icons/productindepth/metrix/ico.positivemonth.svg',
    },
    {
      name: 'Length of Track Record',
      icoSrc: '/assets/icons/productindepth/metrix/ico.lengthtrack.svg',
    },
  ];

  const matrixTitle = (name: string): { name: string; icoSrc: string } => {
    return name === 'Return Month-to-date'
      ? matrixTitles[0]
      : name === 'Return Quarter-to-date'
      ? matrixTitles[1]
      : name === 'Return Year-to-Date'
      ? matrixTitles[2]
      : name === 'Return Inception-to-Date'
      ? matrixTitles[3]
      : name === 'Average Month'
      ? matrixTitles[4]
      : name === 'Best Month'
      ? matrixTitles[5]
      : name === 'Worst Month'
      ? matrixTitles[6]
      : name === 'Positive Months'
      ? matrixTitles[7]
      : name === 'Length of Track Record'
      ? matrixTitles[8]
      : { name: '', icoSrc: '' };
  };

  return (
    <>
      <Separator />
      <table>
        <colgroup>
          <col span={1} style={{ width: 70 + '%' }}></col>
          <col span={1} style={{ width: 30 + '%' }}></col>
        </colgroup>
        <tbody>
          {matrix.map((item: { id: any; name: string; value: any }) => (
            <tr key={item.id}>
              <td>
                <div className='table-body matrix-name'>
                  <img
                    className='mr-2'
                    src={matrixTitle(item.name).icoSrc}
                    alt=''
                  />
                  <p>{matrixTitle(item.name).name}</p>
                </div>
              </td>
              <td>
                <div className='table-body df-r'>
                  {typeof item.value === 'number' ? (
                    <p
                      className={`fw-b mr-2 ${
                        item.value > 0
                          ? 'tc-positive'
                          : item.value < 0
                          ? 'tc-alert'
                          : 'tc-s'
                      }`}
                    >
                      {item.value}%
                    </p>
                  ) : (
                    <p className={`fw-b tc-s mr-2`}>{item.value}</p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Separator />
      <style jsx>
        {`
          table {
            width: 100%;
            border-collapse: collapse;
          }

          .table-body .matrix-name {
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
            padding-left: 30px;
            height: 70px;
            display: flex;
            align-items: center;
          }

          .table-body {
            padding-left: 30px;
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

          .matrix-name {
            font-weight: bold;
          }

          .table-title {
            font-size: smaller;
          }
        `}
      </style>
    </>
  );
};

export default MatrixTable;
