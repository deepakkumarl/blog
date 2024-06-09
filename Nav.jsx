import { Link } from "react-router-dom";

const Nav = ({ search, setSearch, searchItems }) => {
  return (
    <>
      <form onSubmit={(e) => searchItems(e)} className="forms">
        <input
          placeholder="Search your posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       
      </form>
      <div className="ss">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/newpost">New Post</Link>
      </div>
    </>
  );
};

export default Nav;
