const Item = props => {
  return (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.changeStatus(props.id)}
      //   w tej funkcji dodane jest prpos id i odbierane jako id w funkcji
      // w wywolaniu onClick jest ()=> po to aby nie wywolać tej funkcji odrazu
    >
      {props.name}
    </li>
  );
};

// style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
// dodawanie liniowo cssow
