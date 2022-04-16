const DropdownWithIcons = ({
  option,
  setOption,
  options,
  handleOptionSelection,
  showList,
  w = 'fit-content',
}: any) => {
  return (
    <>
      <div onClick={handleOptionSelection} className='selected-option rounded'>
        <img
          src={options.filter((e: any) => e.id === option)[0].icoSrc}
          alt=''
        />
        <p>{options.filter((e: any) => e.id === option)[0].name}</p>
        {showList && (
          <div className='selector-dropdown glow'>
            {options.map((option: any) => (
              <div
                className='option'
                onClick={() => {
                  setOption(option.id);
                  handleOptionSelection();
                }}
                key={option.id}
              >
                <img src={option.icoSrc} alt='' />
                <p>{option.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .selected-option {
          display: flex;
          position: relative;
          padding: 8px 16px 8px 8px;
          align-items: center;
          background-color: var(--bgTextInput);
          width: 'fit-content';
          cursor: pointer;
        }

        .selected-option img {
          margin-right: 8px;
        }

        .selector-dropdown {
          background-color: var(--bgPrimary);
          position: absolute;
          border-radius: 5px;
          top: 0;
          right: 0px;
        }

        .option {
          display: flex;
          padding: 8px 16px;
          align-items: center;
          cursor: pointer;
        }

        .option:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .option img {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
};

export default DropdownWithIcons;
