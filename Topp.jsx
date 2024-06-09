const Topp = ({ handleUsers, handlePosts, handleComments }) => {
    const objj = {
      display: "flex"
    };
  
    const buttonStyle = {
      flexGrow: 1
    };
  
    return (
      <div style={objj}>
        <button style={buttonStyle} onClick={handleUsers}>Users</button>
        <button style={buttonStyle} onClick={handlePosts}>Posts</button>
        <button style={buttonStyle} onClick={handleComments}>Comments</button>
      </div>
    );
  };
  
  export default Topp;