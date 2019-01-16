class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Herbata", active: true },
      { id: 2, name: "Kawa", active: false },
      { id: 3, name: "Kasza", active: true },
      { id: 4, name: "Ziemniaki", active: false },
      { id: 5, name: "Sałatka", active: true },
      { id: 6, name: "Marchewka", active: false },
      { id: 7, name: "Zupa Dnia", active: false },
      { id: 8, name: "Kanapki", active: false },
      { id: 9, name: "Mięso", active: true }
    ]
  };
  handleChangeStatus = id => {
    console.log(id);
    // ti id jest pobierane dzieki dodaniu propsa w ListItems o nazwie id i wyslaniu go do Items gdzie jest dzieki props wysylanie i odbierane w tej funkcji,
    const items = this.state.items.map(item => {
      if (id === item.id) {
        //wybieramy element dla ktorego chcemuy zmienic activ

        item.active = !item.active;
        // zmieniamy activ
      }
      return item;
    });
    this.setState({
      items: items
      // jesli mamy dwie takie same nazwy mozemy napisac: items
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
