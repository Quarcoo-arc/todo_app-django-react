import React from "react";
import { ReactComponent as PlusIcon } from "../assets/svgs/PlusIcon.svg";

const Form = () => {
  return (
    <form action="">
      <div className="task">
        <input type="checkbox" name="task1" id="task1" />
        <label htmlFor="task1">Task One</label>
      </div>
      <div className="task">
        <input type="checkbox" name="task2" id="task2" />
        <label htmlFor="task2">Task Two</label>
      </div>
      <div className="task">
        <input type="checkbox" name="task3" id="task3" />
        <label htmlFor="task3">Task Three</label>
      </div>
      <div className="task">
        <input type="text" name="newTask" id="newTask" placeholder="New Task" />
        <button type="submit" className="submitBtn">
          <PlusIcon width="2rem" className="plusIcon" />
        </button>
      </div>
    </form>
  );
};

export default Form;
