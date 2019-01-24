import React from "react";
// irmc
import "./Word.css";

// sfc - Stateless Function Component
const Word = props => {
  return (
    <li>
      Słowo po angielsku to <strong> {props.en}</strong> Tłumaczenie{" "}
      <strong> {props.pl}</strong>{" "}
    </li>
  );
};

export default Word;
