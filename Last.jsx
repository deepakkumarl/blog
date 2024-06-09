const Last = ({ changeTextColor }) => {
    const innn = {
      position: "absolute",
      top: "450px",
      left: "620px",
      color: "black",
    };
  
    return (
      <button style={innn} onClick={changeTextColor}>
        Toggle color
      </button>
    );
  };
  
  export default Last;
  