const ValidationMassage = props => {
  const { txt } = props;
  return <p>{txt}</p>;
};
const OrderForm = props => {
  const { onSubmit, change, isConfirm } = props;
  // jestesmy dzieckiem ticketshop i nie ma dostepu do this
  // musimy przekazac do props potrzebne nam zeczy
  return (
    <form onSubmit={onSubmit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirm} />
      <label htmlFor="age">Mam conajmniej 18 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
      {/* <button onClick={onSubmit}>Kup Bilet</button> */}
    </form>
  );
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
  displayMsg = () => {
    if (this.state.isFormSubmitted) {
      // jesli isFormSubmitted jest true to wyswietla nam komunikat czyli komunikat jest wyswietlany dopiero po wcisnieciu guzika i ten karunek nam to sprawdza
      if (this.state.isConfirm) {
        return <ValidationMassage txt="Możesz obejrzeć film Zapraszamy" />;
      } else
        return (
          <ValidationMassage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 18 lat!" />
        );
    } else {
      return null;
    }
  };
  handleBuy = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted)
      this.setState({
        isFormSubmitted: true
      });
  };
  render() {
    const { isConfirm, isFormSubmitted } = this.state;
    // debugger;

    return (
      <React.Fragment>
        <h1>Kup bilet na film roku!</h1>
        <OrderForm
          onSubmit={this.handleBuy}
          change={this.handleCheckbox}
          checked={isConfirm}
        />
        {this.displayMsg()}
        {/* przekazujemy do funkcji zewnetrzenj dwa parametry isConfirm, isFormSubmitted  aby sie do nich odwołać*/}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<TicketShop />, document.getElementById("root"));
