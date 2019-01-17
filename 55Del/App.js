class App extends React.Component {
  state = {
    persons: [
      "Herbata",
      "Kawa",
      "Kasza",
      "Ziemniaki",
      "Sałatka",
      "Marchewka",
      "Zupa Dnia",
      "Kanapki",
      "Mięso"
    ]
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
    return (
      <React.Fragment>
        <List persons={this.state.persons} rem={this.hendleRemovePerson} />
      </React.Fragment>
    );
  }
}
