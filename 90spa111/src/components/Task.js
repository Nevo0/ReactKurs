import React from "react";
// import AddTask from "./AddTask";

const important = {
  color: "red"
};
const Task = props => {
  const { title, date, id, priority, status, finishdate } = props.task;
  //
  if (!status) {
    return (
      <div>
        <p>
          <strong style={priority ? important : null}>{title}</strong>- do{" "}
          {date}
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(props.task.id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishdate).toLocaleString();
    return (
      <div>
        <p>
          {title}
          <em> (- zrobić do {date})</em>
          <br />- potwierdzenie wykoniania <span>{finish}</span>
          <button onClick={() => props.delete(props.task.id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
