import React from "react";
import { ReactComponent as EditIcon } from "../assets/svgs/EditIcon.svg";
import { ReactComponent as DeleteIcon } from "../assets/svgs/DeleteIcon.svg";

const TaskItem = ({
  item,
  index,
  editTask,
  deleteTask,
  toggleStrikeThrough,
}) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        name={"task" + index}
        id={"task" + index}
        onChange={toggleStrikeThrough}
      />
      <label htmlFor={"task" + index}>{item.item}</label>
      <div className="icons">
        <EditIcon
          width="1.5rem"
          className="icon"
          fill="#e1e104"
          onClick={editTask}
        />
        <DeleteIcon
          width="1.5rem"
          className="icon"
          fill="#d20707"
          onClick={deleteTask}
        />
      </div>
    </div>
  );
};

export default TaskItem;
