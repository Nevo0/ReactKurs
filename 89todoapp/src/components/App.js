import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        title: "Pozmywać naczynia",
        date: "2019-01-11",
        priority: true,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 1,
        title: "naczynia",
        date: "2019-01-20",
        priority: false,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 2,
        title: "Wynieść smieci",
        date: "2019-01-15",
        priority: true,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 3,
        title: "React",
        date: "2019-01-12",
        priority: false,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 4,
        title: "Pozmywać naczynia",
        date: "2019-01-11",
        priority: true,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 5,
        title: "naczynia",
        date: "2019-01-20",
        priority: false,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 6,
        title: "Wynieść smieci",
        date: "2019-01-15",
        priority: true,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 7,
        title: "React",
        date: "2019-01-12",
        priority: false,
        status: false,
        finishdate: "2019-02-20"
      },
      {
        id: 8,
        title: "Skręcać kuchnie",
        date: "2019-01-20",
        priority: false,
        status: false,
        finishdate: "2019-02-20"
      }
    ]
  };

  deleteTask = id => {
    // console.log("deleteTask" + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // // metoda zwraca nam index na ktorym miejscu znajduje sie w tym wypadku id
    // tasks.splice(index, 1);
    // // w tej metodzie wycinamy od znalezionego indexu jeden czyli tylko zanaleziony index
    // this.setState({
    //   tasks
    // });
    let tasks = [...this.state.tasks];
    // tasks= tasks.filter(task => task.id === id)
    // jezeli to tak zostawimy to do nowej tablicy zostanie przenisiony tylkompasujacy element

    // tasks = tasks.filter(xxx => console.log(xxx.id === id));
    tasks = tasks.filter(task => task.id !== id);
    // w tej metodzie jezeli bedzie true to karzdy element zostanie przeniesiony do nowej tablicy
    // jesli bedzie false to zaden enelemnt nie zostanie przeniesiony do nowej tablicy

    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("changeTaskStatus" + id);

    let tasks = Array.from(this.state.tasks);
    // let tasks = [...this.state.tasks] to jest to samo co wyzej

    tasks.forEach(task => {
      // przerabiamy ta sama tablice nie potrzeba let nie bedziemy zwracac nowej tablicy, moze byc const
      // na karzdym elemencie cos sie wykona
      // foreach zwraca undefined

      // moza by tez wykorzystac map
      if (task.id === id) {
        task.status = true;
        task.finishdate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    const id = this.state.tasks.length;
    console.log("add Task w App");
    console.log(this.state.tasks.length);

    const task = {
      id: id,
      title: text,
      date: date,
      priority: important,
      status: false,
      finishdate: null
    };
    console.log(task);

    this.setState({
      tasks: [...this.state.tasks, task]
    });

    return true;
  };

  render() {
    return (
      <div>
        To Do App
        <AddTask addTask={this.addTask} />
        <hr />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
