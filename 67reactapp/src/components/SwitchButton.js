import React from "react";

// sfc

const SwitchButton = props => {
  // jezeli odrazu cos zwracamy to mozemy to umiescic w nawiasach ()
  // jeżeli nie to { return()}
  return (
    <button onClick={props.handleClick}>
      {props.active ? "Stop" : "Start"}
    </button>
  );
};
export default SwitchButton;
