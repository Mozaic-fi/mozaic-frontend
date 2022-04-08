import ProgressBar from '../commons/ProgressBar';

const DepositSummary = ({
  currDep,
  maxCap,
  currency,
}: {
  currDep: number;
  maxCap: number;
  currency: string;
}) => {
  return (
    <>
      <div className='pb-container'>
        <section>
          <p className='subtitle'>Current Deposits</p>
          <p className='num2'>
            {currDep} {currency}
          </p>
        </section>
        <ProgressBar maxCap={maxCap} currDep={currDep} />
        <section>
          <p className='subtitle'>Max Capacity</p>
          <p className='num2'>
            {maxCap / 1000}k {currency}
          </p>
        </section>
      </div>
      <style jsx>
        {`
          .pb-container {
            width: 100%;
          }
          section {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default DepositSummary;
