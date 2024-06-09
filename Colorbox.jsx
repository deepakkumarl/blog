const Colorbox = ({ col, cal }) => {
    const box = {
      backgroundColor: col,
      width: "200px",
      position: "absolute",
      top: "150px",
      left: "550px",
      height: "200px",
      border: "1px solid black",
    };
  
    const innn = {
      display: "grid",
      justifyContent: "center",
      alignContent: "center",
      position: "relative",
      top: "40px",
      color: cal,
    };
  
    return (
      <div style={box}>
        <h4 style={innn}>{col}</h4>
      </div>
    );
  };
  
  export default Colorbox;
  