import React, { useEffect, useState } from "react";
import { ReactComponent as PlusIcon } from "../assets/svgs/PlusIcon.svg";

const Form = () => {
  const [newTask, setNewTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await fetch("http://127.0.0.1:8000/tasks/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await tasks.json();
      setTaskList(data);
    };
    fetchTasks();
  }, []);

  const changeTaskText = (event) => setNewTask(event.target.value);

  const addNewTask = (event) => {
    event.preventDefault();
    setTaskList((prev) => [...prev, newTask]);
    console.log(newTask);
    setNewTask("");
  };

  return (
    <div>
      {taskList.map((item, index) => (
        <div key={index} className="task">
          <input type="checkbox" name={"task" + index} id={"task" + index} />
          <label htmlFor={"task" + index}>{item.item}</label>
        </div>
      ))}
      <div className="task">
        <form action="" onSubmit={addNewTask}>
          <input
            type="text"
            name="newTask"
            id="newTask"
            placeholder="New Task"
            required
            value={newTask}
            onChange={changeTaskText}
          />
          <button type="submit" className="submitBtn">
            <PlusIcon width="2rem" className="plusIcon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
