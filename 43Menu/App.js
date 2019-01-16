class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "Kasza", active: true },
      { id: 4, name: "Marchewka", active: false },
      { id: 5, name: "Zupa Dnia", active: true },
      { id: 6, name: "wrzątek", active: false },
      { id: 7, name: "chleb", active: false }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems />
      </React.Fragment>
    );
  }
}
