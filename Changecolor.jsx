const Changecolor = ({ col, setCol, handleChange }) => {
    const colorr = {
      position: "absolute",
      top: "400px",
      left: "570px",
      display: "flex",
      flexDirection: "column",
      rowGap: "20px",
    };
  
    return (
      <form style={colorr} onSubmit={(e) => handleChange(e)}>
        <input
          type="text"
          placeholder="Enter colour"
          value={col}
          onChange={(e) => setCol(e.target.value)}
        ></input>
        
      </form>
    );
  };
  
  export default Changecolor;
  