class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: true },
      { id: 3, name: "Kasza", active: true },
      { id: 4, name: "Marchewka", active: true },
      { id: 5, name: "Zupa Dnia", active: true },
      { id: 6, name: "wrzątek", active: true },
      { id: 7, name: "chleb", active: true }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Heder iitems={this.state.items} />
        <ListItems />
      </React.Fragment>
    );
  }
}
