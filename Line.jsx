import { FaTrash } from "react-icons/fa";

const Line = ({ task, handleChange, handleClick }) => {
  return (
    <li className="maincontent">
      <input
        type="checkbox"
        checked={task.check}
        onChange={() => handleChange(task.id)}
      />
      <label style={task.check ? { textDecoration: "line-through" } : null}>
        {task.val}
      </label>
      <FaTrash role="button" onClick={() => handleClick(task.id)} />
    </li>
  );
};

export default Line;
