const Mainn = ({ dis }) => {
    return (
      <ul>
        {dis.map((item, index) => (
          <li key={index}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    );
  };
  
  export default Mainn;