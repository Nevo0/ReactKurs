const List = props => {
  const persons = props.persons.map((person, i = 0) => (
    <Person key={i} id={i++} name={person} rem={props.rem} />
  ));
  return <ul>{persons}</ul>;
};
