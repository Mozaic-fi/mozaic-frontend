const Button = ({
    btnType = "btn-primary",
    clickHandler = () => { },
    text = "Button", ico = "" }) => {

    return (
        <>
            {!ico
                ? <button className={btnType} onClick={clickHandler}>
                    {text}
                </button>
                : <button className={btnType} onClick={clickHandler}>
                    <div className="wicobtn">
                        <img src={ico} alt="" />
                        <p>{text}</p>
                    </div>
                </button>
            }

            <style jsx>
                {`
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                    }
                `}
            </style>

        </>);
}

export default Button;