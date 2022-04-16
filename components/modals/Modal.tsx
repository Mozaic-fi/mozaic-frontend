import { useEffect, useState } from 'react';
const Modal = ({
  title,
  closeModal,
  w = '300px',
  children,
  titleImgSrc,
}: {
  title: string;
  closeModal: Function;
  w?: string;
  children: JSX.Element;
  titleImgSrc?: string;
}) => {
  const [open, setOpen] = useState<boolean>(true);

  // Close modal

  const handleModal = (): void => {
    setOpen(false);
    setTimeout(() => {
      closeModal(false);
    }, 250);
  };

  return (
    <>
      <div
        className={`overlay df-c ${open ? 'open' : 'close'}`}
        onClick={handleModal}
      >
        <div
          className={`modal-container ${open ? 'open' : 'close'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className='modal-header'>
            <img
              className='btn-close'
              onClick={handleModal}
              src='/assets/icons/common/ico.close.svg'
              alt=''
            />
            <div>
              {titleImgSrc && <img src={titleImgSrc} alt='' />}
              <h3 className='fs-l fw-r tc-s'>{title}</h3>
            </div>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>

      <style jsx>
        {`
          .modal-container {
            margin-top: 96px;
            position: relative;
            max-height: 80vh;
            padding: 24px;
            width: ${w};
            background-color: var(--bgPrimary);
            border: 1px solid transparent;
            border-radius: 15px;
          }

          .modal-header {
            margin-top: 12;
            margin-bottom: 36px;
            text-align: center;
            color: white;
          }

          .btn-close {
            position: absolute;
            top: 24px;
            right: 24px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background: transparent;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 12px;
          }

          .btn-close:hover {
            filter: invert(88%) sepia(27%) saturate(401%) hue-rotate(345deg)
              brightness(800%) contrast(91%);
          }
        `}
      </style>

      <style jsx global>
        {`
          .modal-container {
            &.open {
              animation: slide 0.25s ease 0s 1 forwards;
            }

            &.close {
              animation: slide-rev 0.25s ease 0s 1 backwards;
            }
          }

          .overlay {
            &.open {
              animation: fade-overlay 0.25s ease 0s 1 forwards;
            }

            &.close {
              animation: fade-overlay-rev 0.25s ease 0s 1 backwards;
            }
          }
        `}
      </style>
    </>
  );
};

export default Modal;
