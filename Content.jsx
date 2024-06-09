import Content2 from "./Content2";

const Content = ({ tasks, handleChange, handleClick, feterr, load }) => {
  return (
    <div>
      <h1>{feterr}</h1>
      <h1>{load && "Data is loading"}</h1>
      <ul className="naving">
        <Content2
          tasks={tasks}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </ul>
    </div>
  );
};

export default Content;
