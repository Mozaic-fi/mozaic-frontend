const SelectOptions = ({ type = "dropdown", options = [], selectedVal, setSelectedVal, handleClick }) => {

    const selectOptHandler = (e) => {
        setSelectedVal(e.target.value);
        console.log(selectedVal);
    }

    return (
        <>
            {type === "dropdown" &&
                <select className="select-container" onChange={!handleClick ? selectOptHandler : (e) => { handleClick(e.target.value) }}>
                    {options.map((option) =>
                        <option key={option.id} value={option.value}>{option.name}</option>
                    )}
                </select>}
            {type === "range" &&
                <div className="select-container range">
                    {options.map((option) =>
                        <div key={option.id}>
                            <button onClick={!handleClick ? selectOptHandler : (e) => { handleClick(e.target.value) }} value={option.value} className={option.value === selectedVal && "active"} >{option.name}</button>
                            <div className="separator"></div>
                        </div>
                    )}
                </div>
            }
            <style jsx>
                {`

                    button {
                        height: 35px;
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    );
}

export default SelectOptions;