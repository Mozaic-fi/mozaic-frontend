import { SetStateAction, useState } from 'react';
import Modal from './Modal';

const ValueEditorModal = ({
  title = 'Value Editor',
  type = 'number',
  closeModal,
  value,
  setValue,
}: {
  title: string;
  type?: string;
  closeModal: Function;
  value: number;
  setValue: SetStateAction<any>;
}) => {
  const [newValue, setNewValue] = useState<any>(value);
  const handleSubmit = () => {
    setValue(newValue);
    closeModal(false);
  };

  return (
    <>
      <Modal title={title} closeModal={closeModal}>
        <>
          <div className='input-container rounded'>
            <input
              onChange={(e) => setNewValue(e.target.value)}
              value={newValue}
              type='number'
              step='any'
            />
          </div>
          <button className='btn-primary w-100' onClick={handleSubmit}>
            Save
          </button>
        </>
      </Modal>
      <style jsx>
        {`
          input {
            border: none;
            height: 60px;
            padding-left: 30px;
            box-sizing: border-box;
            background-color: transparent;
            width: inherit;
            flex-grow: 1;
          }

          .input-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.05);
            width: 100%;
            padding-right: 8px;
            margin-bottom: 24px;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input:focus-visible {
            outline-offset: 0;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default ValueEditorModal;
