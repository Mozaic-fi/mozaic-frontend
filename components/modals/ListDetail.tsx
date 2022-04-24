import Link from 'next/link';

const ListDetail = ({ infoText, link, title, description }: any) => {
  return (
    <>
      <div className='df-sb'>
        <p className='tc-s fs-s ta-l df-c'>
          {title}
          {infoText && (
            <>
              &nbsp;{' '}
              <span>
                <img
                  style={{ display: 'inline-block' }}
                  className='info-btn'
                  src='/assets/icons/ico.info.svg'
                  alt=''
                />
              </span>
            </>
          )}
        </p>
        {!link ? (
          <p className='df-c tc-s fs-s t-b ta-r'>{description}</p>
        ) : (
          <Link href={link}>
            <a className='tc-s fs-s t-b ta-r'>
              {description}
              <img
                className='ml-1'
                src='/assets/icons/ico.openlink.svg'
                alt=''
              />{' '}
            </a>
          </Link>
        )}
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default ListDetail;
