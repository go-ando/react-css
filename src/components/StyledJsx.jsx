export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #592eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0px;
          color: #592eff;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
