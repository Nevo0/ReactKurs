import React from "react";
// import AddTask from "./AddTask";

const Task = props => {
  const { title, date, id } = props.task;
  //
  return (
    <p>
      {title} - do {date}
      <button onClick={() => props.change(id)}>Zostało zrobione</button>
      <button onClick={() => props.delete(props.task.id)}>X</button>
    </p>
  );
};

export default Task;
