// const PositiveMessage = () => {
//   return <p>Możesz obejrzeć film Zapraszamy</p>;
// };

// const NegativeMessage = () => {
//   return <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 18 lat!</p>;
// };

const displayMsg = (isConfirm, isFormSubmitted) => {
  if (isFormSubmitted) {
    // jesli isFormSubmitted jest true to wyswietla nam komunikat czyli komunikat jest wyswietlany dopiero po wcisnieciu guzika i ten karunek nam to sprawdza
    if (isConfirm) {
      return <ValidationMassage txt="Możesz obejrzeć film Zapraszamy<" />;
    } else
      return (
        <ValidationMassage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 18 lat!" />
      );
  } else {
    return null;
  }
};

const ValidationMassage = props => {
  const { txt } = props;
  return <p>{txt}</p>;
};

class TicketShop extends React.Component {
  state = {
    isConfirm: false,
    isFormSubmitted: false
  };
  handleCheckbox = () => {
    this.setState({
      isConfirm: !this.state.isConfirm,
      isFormSubmitted: false
    });
  };
  // displayMsg = () => {
  //   if (this.state.isFormSubmitted) {
  //     // jesli isFormSubmitted jest true to wyswietla nam komunikat czyli komunikat jest wyswietlany dopiero po wcisnieciu guzika i ten karunek nam to sprawdza
  //     if (this.state.isConfirm) {
  //       return <ValidationMassage txt="Możesz obejrzeć film Zapraszamy<" />;
  //     } else
  //       return (
  //         <ValidationMassage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 18 lat!" />
  //       );
  //   } else {
  //     return null;
  //   }
  // };
  handleBuy = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted)
      this.setState({
        isFormSubmitted: true
      });
  };
  render() {
    const { isConfirm, isFormSubmitted } = this.state;

    return (
      <React.Fragment>
        <h1>Kup bilet na film roku!</h1>
        <form onSubmit={this.handleBuy}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckbox}
            checked={isConfirm}
          />
          <label htmlFor="age">Mam conajmniej 18 lat</label>
          <br />
          <button onClick={this.handleBuy}>Kup Bilet</button>
        </form>
        {displayMsg(isConfirm, isFormSubmitted)}
        {/* przekazujemy do funkcji zewnetrzenj dwa parametry isConfirm, isFormSubmitted  aby sie do nich odwołać*/}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<TicketShop />, document.getElementById("root"));
