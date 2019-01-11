const date = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 19,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 46,
      name: "Stasia",
      sex: "female"
    },
    {
      id: 4,
      age: 19,
      name: "Karol",
      sex: "male"
    },
    {
      id: 5,
      age: 19,
      name: "Zosia",
      sex: "female"
    }
  ]
};
const Item = ({ content }) => {
  // możęmy wpisac propsy  o jaknie nam chodzi, a nie przekazywać wszystkich propsow
  return (
    <div className="userInfo">
      {/* przekazujemy propsy o nazwie takiej jak w items */}
      <h1>{content.name}</h1>
      <p>Informacje o użytkowniku</p>
      <p>
        Wiek użytkowaika: <strong>{content.age}</strong>
      </p>
      <p>Płeć użytkownika: {content.sex}</p>
    </div>
  );
};

class LiistItem extends React.Component {
  state = {
    select: "all"
  };
  handleUsersFilter = option => {
    this.setState({
      select: option
    });
  };

  usersList = () => {
    // przekazalismy do propsow tablice z naszymi userami date={date} i teraz mozemy sie do nich odwolać
    let users = this.props.date.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item content={user} key={user.id} />);
      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item content={user} key={user.id} />);
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item content={user} key={user.id} />);
      default:
        "Brak danych";

      // Zwracamy nowa tablice i zostaje ona wyswietlona w  {this.usersList()}
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>
          Wszyscy
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Kobiety
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Mężczyźni
        </button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<LiistItem date={date} />, document.getElementById("root"));
