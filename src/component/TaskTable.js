import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((tasks) => (
        <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <div className="mt-2">
      <table className="table table-dark table-hover ">
        <thead>
          <tr>
            <th className="text-center m-2">Tareas</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {taskTableRows(showCompleted)}
        </tbody>
      </table>
    </div>
  );
};
