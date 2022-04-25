import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function StakeOptions({ logData }: any) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className='log-display mb-5'>
        {logData.map((log: any) => (
          <div key={log.id} className='log-item'>
            <div className='df-c fd-r token-name-amount'>
              <p className='log-ff tc-s'>
                {log.tokenAmount}{' '}
                {width > 560 ? <span>&emsp;&emsp;</span> : ' '}
              </p>
              <img
                className={width > 590 ? 'mr-5' : 'ml-2 mr-2'}
                src={log.icoSrc}
                alt=''
              />
              <p className='tc-s log-ff'> {log.tokenName}&nbsp;</p>
            </div>
            <p className='tc-s log-ff'>
              <span className='tc-h log-ff'>
                {log.isLocked ? 'LOCKED' : 'UNLOCKED'}{' '}
              </span>
              <span className='tc-s'>&nbsp; for &nbsp;</span>
              <span className='tc-h log-ff'>
                {log.year
                  ? log.year + ' Year(s) '
                  : log.month
                  ? log.month + ' Month(s) '
                  : log.week
                  ? log.week + ' week(s) '
                  : undefined}
              </span>
              <span className='tc-s log-ff'>
                {width > 560 && <span>&emsp;</span>} ={' '}
                {width > 560 && <span>&emsp;&emsp;</span>}
              </span>
              <span className='tc-h log-ff'>
                {log.value}
                {log.valueName}
              </span>
            </p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .log-display {
            box-sizing: border-box;
            background-color: #6a6a6a30;
            width: 100%;
            padding: 36px ${width > 680 ? '72px' : '16px'};
          }

          .log-item {
            display: flex;
            align-items: center;
            margin: 12px 0px;
          }
        `}
      </style>
    </>
  );
}
