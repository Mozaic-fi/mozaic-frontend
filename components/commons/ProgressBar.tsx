import { useState, useEffect } from 'react';

const ProgressBar = ({
  maxCap = 100,
  currDep = 40,
}: {
  maxCap?: number | undefined;
  currDep?: number | undefined;
}) => {
  const val = (currDep / maxCap) * 100;

  const [currVal, setCurrVal] = useState<number>(0);

  useEffect(() => {
    let unSub = false;
    if (!unSub) {
      setTimeout(() => {
        setCurrVal(val);
      }, 1000);
    }

    return () => {
      unSub = true;
    };
  }, []);

  return (
    <>
      <div className='pb-bg'>
        <div className='pb-res'></div>
      </div>

      <style jsx>
        {`
          .pb-bg {
            position: relative;
            background-color: #efefef;
            height: 3px;
            width: 100%;
            border-radius: 3px;
          }
          .pb-res {
            position: absolute;
            border-radius: 3px;
            height: 3px;
            width: ${currVal}%;
            background-color: #ffbb00;
            box-shadow: 0px 0px 4px #fac111;
            transition: all 1s ease-out;
          }
        `}
      </style>
    </>
  );
};

export default ProgressBar;
