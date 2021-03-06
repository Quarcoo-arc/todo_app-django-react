import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as PlusIcon } from "../assets/svgs/PlusIcon.svg";
import { ReactComponent as CheckMarkIcon } from "../assets/svgs/CheckMarkIcon.svg";
import TaskItem from "./TaskItem";
import UserContext from "../context/UserContext";

const Form = () => {
  const { userName } = useContext(UserContext);

  const [newTask, setNewTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const [editItemUrl, setEditItemUrl] = useState("");

  const url =
    window.location.hostname === "localhost"
      ? "http://127.0.0.1:8000/tasks/"
      : "https://todo-app-react-django-backend.herokuapp.com/tasks/";

  useEffect(() => {
    if (!userName) {
      alert("You're not logged in!");
      return;
    }
    const fetchTasks = async () => {
      const tasks = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await tasks.json();
      setTaskList(data.filter((item) => item.user === userName));
    };
    fetchTasks();
  }, [url, userName]);

  console.log(taskList);

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
      const recentTask = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newTask,
          user: userName,
        }),
      });
      const data = await recentTask.json();
      data && setTaskList((prev) => [data, ...prev]);
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
          user: userName,
        }),
      });
      const data = await updatedTask.json();
      data &&
        setTaskList([
          data,
          ...taskList.filter((item) => item.url !== editItemUrl),
        ]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editTask = (item) => {
    setNewTask(item.item);
    setEditItemUrl(item.url);
  };

  const toggleStrikeThrough = (event) => {
    event.target.nextSibling.classList.toggle("strikethrough");
  };

  return (
    <div>
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
      {taskList.map((item) => (
        <TaskItem
          key={item.url.split("/")[item.url.split("/").length - 2]}
          index={item.url.split("/")[item.url.split("/").length - 2]}
          item={item}
          editTask={editTask.bind(null, item)}
          deleteTask={deleteTask.bind(null, item.url)}
          toggleStrikeThrough={toggleStrikeThrough}
        />
      ))}
    </div>
  );
};

export default Form;
