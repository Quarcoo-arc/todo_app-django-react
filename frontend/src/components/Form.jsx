import React, { useEffect, useState } from "react";
import { ReactComponent as PlusIcon } from "../assets/svgs/PlusIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svgs/EditIcon.svg";
import { ReactComponent as DeleteIcon } from "../assets/svgs/DeleteIcon.svg";

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

  const addNewTask = async (event) => {
    event.preventDefault();
    if (!newTask) {
      return alert("Please enter a task!");
    }
    try {
      const recentTask = await fetch("http://127.0.0.1:8000/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newTask,
        }),
      });
      const data = await recentTask.json();
      data && setTaskList((prev) => [...prev, data]);
    } catch (error) {
      console.log(error.message);
    }
    setNewTask("");
  };

  const deleteTask = (url) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => setTaskList(taskList.filter((item) => item.url !== url)));
  };

  return (
    <div>
      {taskList.map((item, index) => (
        <div key={index} className="task">
          <input type="checkbox" name={"task" + index} id={"task" + index} />
          <label htmlFor={"task" + index}>{item.item}</label>
          <div className="icons">
            <EditIcon
              width="1.5rem"
              className="icon"
              fill="#e1e104"
              onClick={() => console.log(index)}
            />
            <DeleteIcon
              width="1.5rem"
              className="icon"
              fill="#d20707"
              onClick={deleteTask.bind(null, item.url)}
            />
          </div>
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
