const Separator = () => {
  return (
    <>
      <div id='separator'></div>
      <style jsx>
        {`
          #separator {
            height: 1px;
            width: 100%;
            background-color: var(--textSecondary50);
          }
        `}
      </style>
    </>
  );
};

export default Separator;
