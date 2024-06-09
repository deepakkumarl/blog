import Line from "./Line";

const Content2 = ({ tasks, handleClick, handleChange }) => {
  return (
    <>
      {tasks.map((task) => (
        <Line
          key={task.id}
          task={task}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default Content2;
