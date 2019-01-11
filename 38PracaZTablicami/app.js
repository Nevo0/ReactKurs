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
  // możęmy wpisac propsy o jaknie nam chodzi, a nie przekazywać wszystkich propsow
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
  // state = {
  //   items: ["jabłko", "sliwka", "gruszka"]
  // };
  render() {
    return (
      <div>
        <ul>{Items}</ul>
      </div>
    );
  }
}

ReactDOM.render(<LiistItem date={date} />, document.getElementById("root"));
