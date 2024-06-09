import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Crud from "./Crud";

const Top = ({ tasks, setTasks, API }) => {
  const [write, setWrite] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addToList(write);
    setWrite("");
  };

  const addToList = async (val) => {
    // Ensure a unique ID
    const id = tasks.length > 0 ? Math.max(tasks.map(task => task.id)) + 1 : 1;
    const newTask = { id, val, check: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    const CreateAdd = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    };

    const res = await Crud(API, CreateAdd);
    if (res) {
      console.error(res);
    }
  };

  return (
    <form className="ff" onSubmit={handleSubmit}>
      <input
        className="inp"
        type="text"
        required
        placeholder="Enter Task"
        value={write}
        onChange={(e) => setWrite(e.target.value)}
      />
      <button className="btn" type="submit">
        <IoIosAddCircle />
      </button>
    </form>
  );
};

export default Top;
