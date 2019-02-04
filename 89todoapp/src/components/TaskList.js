import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => !task.status);
  //
  const done = props.tasks.filter(task => task.status);

  const tasksFalse = active.map(task => {
    return (
      <Task
        key={task.id}
        task={task}
        change={props.changeTaskStatus}
        delete={props.deleteTask}
      />
    );
  });
  const tasksTrue = done.map(task => {
    return (
      <Task
        key={task.id}
        task={task}
        change={props.changeTaskStatus}
        delete={props.deleteTask}
      />
    );
  });
  console.log(active, done);

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
