import { useEffect, useState } from 'react';
import ProgressBar from '../commons/ProgressBar';
import Separator from '../commons/Separator';
const CompactTable = ({ items }: any) => {
  const [maxAllocation, setMaxAllocation] = useState(0);

  useEffect(() => {
    let max = 0;
    items.map((item: any) =>
      item.allocation > max ? (max = item.allocation) : max
    );
    setMaxAllocation(max);
  }, []);

  return (
    <>
      <div className='table'>
        {items.map((item: any) => (
          <div key={item.id}>
            <div className='table-item'>
              <div className='table-body token-name'>
                <img src={item.icoSrc} alt='' />
                <div>
                  <p className='t-b tc-p'>{item.name}</p>
                  <div className='allocation'>
                    <p>{item.allocation}%</p>
                    <ProgressBar
                      maxCap={maxAllocation}
                      currDep={item.allocation}
                    />
                  </div>
                </div>
              </div>
              <div className='table-body token-details'>
                <p className='t-b'>${item.price}</p>
                <p>{item.apy}</p>
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .table {
            box-sizing: border-box;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.103);
          }

          .table-item {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            width: 100%;
            padding: 24px;
          }

          .table-item:hover {
            background-color: rgba(255, 255, 255, 0.103);
          }

          .token-name {
            display: flex;
            min-width: 60%;
            align-items: center;
          }

          .token-name img {
            height: 56px;
            margin-right: 16px;
          }

          .allocation {
            display: flex;
            flex-direction: row;
            min-width: 120px;
            width: max-content;
            justify-content: start;
            align-items: center;
          }

          .allocation :first-child {
            margin-right: 16px;
          }

          .token-details {
            text-align: right;
            justify-content: end;
            width: 20%;
          }
        `}
      </style>
    </>
  );
};

export default CompactTable;
