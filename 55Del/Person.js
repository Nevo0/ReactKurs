const Person = props => {
  return (
    <li>
      {props.name}
      <button onClick={() => props.rem(props.id)}>Usuń</button>
    </li>
  );
};
