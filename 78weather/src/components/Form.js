import React from "react";
const Form = props => {
  return (
    <form onSubmit={props.handleCitySubmit}>
      <input
        type="text"
        value={props.value}
        placeholder="Wpisz miasto"
        onChange={props.handleInputChange}
      />
      <button>Wyszukaj miasta</button>
    </form>
  );
};

export default Form;
