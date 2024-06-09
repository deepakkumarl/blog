import { Link } from "react-router-dom";

const Home = ({ items }) => {
    return (
      <>
     
        {items.map((item) => (
          <Link to={`/home/${item.id}`} className="content-link">
          <div key={item.id} className="content1">
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <p>{item.body}</p>
            <button >Edit post</button>
            
          </div>
          
          </Link>
        ))}
      </>
    );
  };
  
  export default Home;
  