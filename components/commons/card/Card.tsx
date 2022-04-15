const Card = ({
  children,
  w = '100%',
  d = 'flex',
  h = '100px',
  type = 'primary',
  p = '16px',
}: {
  children?: JSX.Element;
  w?: string;
  d?: string;
  h?: string;
  type?: string;
  p?: string;
}) => {
  return (
    <>
      <div className={'card-' + type + '-p card-bg'}>
        {type === 'primary' && (
          <img className='shine' src='/assets/images/shine.svg' alt='' />
        )}
        {children}
      </div>

      <style jsx>
        {`
          .card-bg {
            position: relative;
            display: ${d};
            flex: 1;
            background-color: #ffffff20;
            backdrop-filter: var(--blur1);
            transition: all 0.25s ease;
            object-fit: contain;
            &:hover {
              background-color: #ffffff30;
            }
          }

          .shine {
            position: absolute;
            top: 0;
            right: 20px;
            height: 100%;
            opacity: 0.1;
          }

          .card-primary-p {
            height: min-content;
            justify-content: start;
            align-items: center;
            border-radius: 10px;
            max-width: 100%;
            min-width: 270px;
            height: ${h};
            padding: ${p};
          }

          .card-secondary-p {
            height: min-content;
            display: ${d};
            justify-content: start;
            align-items: center;
            border-radius: 10px;
            width: ${w};
            min-width: 450px;
            max-width: 100%;
            height: ${h};
            padding: ${p};
          }
        `}
      </style>
    </>
  );
};

export default Card;
