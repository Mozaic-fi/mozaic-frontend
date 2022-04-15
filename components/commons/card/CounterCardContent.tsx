const CounterCardContent = ({
  icoSrc,
  title,
  counter,
}: {
  icoSrc: string;
  title: string;
  counter: any;
}) => {
  return (
    <>
      <div className='counter-card-content'>
        <div className='ico-container'>
          <img src={icoSrc} alt='' />
        </div>
        <div>
          <p className='fs-s tc-s fs-xs'>{title.toUpperCase()}</p>
          <h2 className='ff-2 fs-xl tc-p '>{counter}</h2>
        </div>
      </div>
      <style jsx>
        {`
          .counter-card-content {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ico-container {
            display: flex;
            margin-right: 16px;
            align-self: center;
          }

          img {
            height: 48px;
          }
        `}
      </style>
    </>
  );
};

export default CounterCardContent;
