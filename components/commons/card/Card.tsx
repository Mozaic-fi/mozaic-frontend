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
      <div className={'card-' + type + '-p'}>{children}</div>

      <style jsx>
        {`
          .card-primary-p {
            box-sizing: border-box;
            height: min-content;
            display: ${d};
            justify-content: start;
            align-items: center;
            background: linear-gradient(95.03deg, #2a2b34 0%, #2a2b34 100.65%)
                padding-box,
              linear-gradient(332.19deg, #f8e099 0.94%, rgba(0, 0, 0, 0) 80.79%)
                border-box;
            border: 1px solid transparent;
            border-radius: 10px;
            width: ${w};
            max-width: 100%;
            height: ${h};
            padding: ${p};
            margin: 8px;
          }

          .card-primary-p:hover {
            background: linear-gradient(95.03deg, #2e2f38 0%, #32333d 100.65%)
                padding-box,
              linear-gradient(332.19deg, #f8e099 0.94%, rgba(0, 0, 0, 0) 80.79%)
                border-box;
          }

          .card-secondary-p {
            box-sizing: border-box;
            height: min-content;
            display: ${d};
            justify-content: start;
            align-items: center;
            background: linear-gradient(95.03deg, #25212b 0%, #25212b 100.65%)
                padding-box,
              linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.34) 0%,
                  rgba(0, 0, 0, 0.17) 100%
                )
                border-box;
            border: 1px solid transparent;
            border-radius: 10px;
            width: ${w};
            max-width: 100%;
            height: ${h};
            padding: ${p};
            margin: 8px;
          }

          .card-secondary-p:hover {
            background: linear-gradient(95.03deg, #2e2935 0%, #2a2631 100.65%)
                padding-box,
              linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.34) 0%,
                  rgba(0, 0, 0, 0.17) 100%
                )
                border-box;
          }
        `}
      </style>
    </>
  );
};

export default Card;
