const Header = props => {
  const activeItems = props.items.filter(item => item.active);
  //   console.log(activeItems);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>
        {number
          ? `Do zapłaty: ${number * 10} złotych`
          : `Nic nie wybrałeś, może jednak coś kupiisz`}{" "}
        złoorych
      </h2>
    </header>
  );
};
