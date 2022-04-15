const CardContent = ({
  icoSrc,
  icoText,
  title,
  titleClass = 'tc-p ff-1',
  align,
  description,
}: {
  icoSrc: string[];
  icoText: string;
  title: string;
  titleClass?: string;
  align?: string;
  description: string;
}) => {
  return (
    <>
      <div className={`df fd-c flex-1 ml-5 mr-5 mt-5 mb-5 jc-c ai-c ${align}`}>
        <div className='img-container df-c mb-3'>
          {typeof icoSrc === 'object' ? (
            icoSrc.map((ico, i) => (
              <img className='ico' key={i} src={ico} alt='' />
            ))
          ) : (
            <img className='ico' src={icoSrc} alt='' />
          )}
          {icoText && <h3 className='ml-2'>{icoText}</h3>}
        </div>
        <div>
          <h2 className={`${titleClass} t-ac mb-1`}>{title}</h2>
          <p className={`tc-s t-ac fs-xs`}>{description}</p>
        </div>
      </div>
      <style jsx>
        {`
          .ico {
            height: 40px;
            width: 40px;
          }
        `}
      </style>
    </>
  );
};

export default CardContent;
