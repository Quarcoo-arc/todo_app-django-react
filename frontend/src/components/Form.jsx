import React, { useEffect, useState } from "react";
import { ReactComponent as PlusIcon } from "../assets/svgs/PlusIcon.svg";
import { ReactComponent as CheckMarkIcon } from "../assets/svgs/CheckMarkIcon.svg";
import TaskItem from "./TaskItem";

const Form = () => {
  const [newTask, setNewTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const [editItemUrl, setEditItemUrl] = useState("");

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
    if (editItemUrl) {
      await updateTask();
      setNewTask("");
      setEditItemUrl("");
      return;
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

  const updateTask = async () => {
    if (!editItemUrl) {
      return;
    }
    try {
      const updatedTask = await fetch(editItemUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newTask,
        }),
      });
      const data = await updatedTask.json();
      data &&
        setTaskList([
          ...taskList.filter((item) => item.url !== editItemUrl),
          data,
        ]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editTask = (item) => {
    setNewTask(item.item);
    setEditItemUrl(item.url);
  };

  return (
    <div>
      {taskList.map((item, index) => (
        <TaskItem
          key={index}
          index={index}
          item={item}
          editTask={editTask.bind(null, item)}
          deleteTask={deleteTask.bind(null, item.url)}
        />
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
            {editItemUrl ? (
              <CheckMarkIcon width="2rem" className="plusIcon" fill="green" />
            ) : (
              <PlusIcon width="2rem" className="plusIcon" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
