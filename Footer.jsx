const Footer = ({ rate }) => {
  const dates = new Date();

  const footersection = {
    backgroundColor: "blue",
    color: "white",
    padding: "20px",
    marginBottom: "0",
    position: "relative",
    top: "100px",
  };

  return (
    <div style={footersection}>
      <p>&copy; {dates.getFullYear()} {rate} {rate === 1 ? "item" : "items"}</p>
    </div>
  );
};

export default Footer;
