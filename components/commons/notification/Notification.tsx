import { useEffect, useState } from 'react';

const Notification = (props: any) => {
  const [exit, setExit] = useState<Boolean>(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState<any>(null);

  const handleStartTimer = () => {
    const id: any = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: 'REMOVE_NOTIFICATION',
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <>
      <div
        onMouseEnter={handlePauseTimer}
        onMouseLeave={handleStartTimer}
        className={`notification-item glow ${
          props.type === 'SUCCESS' ? 'success' : 'error'
        } ${exit ? 'exit' : ''}`}
      >
        <p className='fs-xs'>{props.message}</p>
        <div className={'bar'} style={{ width: `${width}%` }} />
      </div>

      <style jsx>
        {`
          .notification-item {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
            animation: SlideLeft 0.4s;
            animation-fill-mode: forwards;
            height: 64px;
            width: 100%;
            background-color: var(--bgPrimary);
          }

          @keyframes SlideLeft {
            0% {
              margin-left: 120%;
            }

            100% {
              margin-left: 0;
            }
          }

          @keyframes SlideRight {
            0% {
              margin-left: 0;
            }

            100% {
              margin-left: 120%;
            }
          }

          .notification-item.exit {
            animation: SlideRight 0.4s;
            animation-fill-mode: forwards;
          }

          .notification-item p {
            margin: 0;
            padding: 10px;
            padding-left: 24px;
          }

          .notification-item.success p {
            color: var(--primaryColor);
          }

          .notification-item.error p {
            color: var(--alert);
          }

          .notification-item .bar {
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .notification-item.success .bar {
            background-color: var(--primaryColor);
          }

          .notification-item.error .bar {
            background-color: var(--alert);
          }
        `}
      </style>
    </>
  );
};

export default Notification;
