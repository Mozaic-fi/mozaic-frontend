import { useEffect, useState } from 'react';
const Modal = ({ title, closeModal, w = "300px", children, titleImgSrc }) => {

    const [open, setOpen] = useState(true);

    const handleModal = () => {
        setOpen(false);
        setTimeout(() => {
            closeModal(false)
        }, 500
        )
    }

    return (
        <>
            <div className={`overlay ${open ? "open" : "close"}`} onClick={handleModal}>
                <div className={`modal-container ${open ? "open" : "close"}`} onClick={(event) => event.stopPropagation()}>
                    <div className="modal-header">
                        <img className="btn-close" onClick={handleModal} src="/assets/icons/ico.close.svg" alt="" />
                        <div>{titleImgSrc && <img src="" alt="" />}<h3 className="ff-1 fs-xl">{title}</h3></div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
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
                        background: linear-gradient(261.36deg, #25212b, #25212b) padding-box,
                            linear-gradient(332.19deg, #f8e099 0.94%, rgba(0, 0, 0, 0) 80.79%)
                            border-box;
                        border: 1px solid transparent;
                        border-radius: 15px;
                    }

                    .modal-container.open {
                        animation: slide 0.5s ease 0s 1 forwards;
                    }

                    .modal-header {
                        margin-top: 12;
                        margin-bottom: 36px;
                        text-align: center;
                        color: white;
                    }
                `}
            </style>
        </>);
}

export default Modal;