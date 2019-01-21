const Person = props => {
  return (
    // <li>
    //   <span>{props.name}</span>
    //   <button onClick={props.delete}>Usuń</button>
    // </li>
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
    </li>
  );
};

class App extends React.Component {
  state = {
    persons: [
      { id: 10, name: "Wojetk" },
      { id: 20, name: "Rafal" },
      { id: 30, name: "Ola" },
      { id: 60, name: "Diana" },
      { id: 7, name: "Kasia" },
      { id: 56, name: "Wiesia" },
      { id: 74, name: "Tomek" },
      { id: 340, name: "Ewelina" },
      { id: 90, name: "Fabian" },
      { id: 980, name: "Róża" },
      { id: 12, name: "Henryka" },
      { id: 11, name: "Adam" }
    ]
  };
  // handleDelete(id) {
  //   // console.log(this, id);
  //   const people = [...this.state.persons];
  //   const index = people.findIndex(person => person.id === id);
  //   // console.log(index);
  //   people.splice(index, 1);
  //   this.setState({
  //     persons: people
  //   });
  // }

  // handleDelete  (name)  {
  //   // tworzenie kopi tablicy persons dzieki Array.from i slice
  //   let people = Array.from(this.state.persons);
  //   let people2 = this.state.persons.slice();
  //   console.log(people2);
  //   // metoda filter zwraca nowa tablice z obiektow true
  //   // people2 = people2.filter(person => !(name === person.name));
  //   people2 = people2.filter(person => name !== person.name);
  //   this.setState({
  //     persons: people2
  //   });
  // };

  handleDelete = name => {
    // tworzenie kopi tablicy persons dzieki Array.from i slice
    let people = Array.from(this.state.persons);
    let people2 = this.state.persons.slice();
    console.log(people2);
    // metoda filter zwraca nowa tablice z obiektow true
    // people2 = people2.filter(person => !(name === person.name));
    people2 = people2.filter(person => name !== person.name);
    this.setState({
      persons: people2
    });
  };

  hendleRemovePerson = index => {
    console.log(index);

    // index2 = this.state.persons.length;
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    // const person = this.state.persons.map(person => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.id)}
    //   />
    // ));
    // const person = this.state.persons.map(person => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.name)}
    //   />
    // ));
    const person = this.state.persons.map(person => (
      <Person key={person.id} name={person.name} delete={this.handleDelete} />
    ));
    return (
      <React.Fragment>
        <ul>{person}</ul>
      </React.Fragment>
    );
  }
}
