import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => !task.status);
  //
  const done = props.tasks.filter(task => task.status);

  // method sort

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishdate < b.finishdate) {
        return 1;
      }
      if (a.finishdate > b.finishdate) {
        return -1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

  const tasksFalse = active.map(task => (
    <Task
      key={task.id}
      task={task}
      change={props.changeTaskStatus}
      delete={props.deleteTask}
    />
  ));
  const tasksTrue = done.map(task => (
    <Task
      key={task.id}
      task={task}
      change={props.changeTaskStatus}
      delete={props.deleteTask}
    />
  ));

  return (
    <div>
      <div className="active">
        <h1>Zadania do zrobienia</h1>

        {tasksFalse.length > 0 ? tasksFalse : <p>Brak zadań</p>}
      </div>
      <hr />
      <div className="done">
        <h1>
          Zadania zrobione <em>({done.length})</em>
        </h1>
        {done.length > 3 && (
          <span>Wyswietlonych jest jedynie 3 ostatnich elementow </span>
        )}
        {tasksTrue.slice(0, 3)}
      </div>
    </div>
  );
};

export default TaskList;

// {
//   /* <Task
//       key={task.id}
//       task={task}
//       change={props.changeTaskStatus}
//       delete={props.deleteTask}
//     /> */
// }
