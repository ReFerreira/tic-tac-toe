import React from "react";

import { Container } from "./styles";

function Square(props) {
  return (
    <Container>
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    </Container>
  );
}

export default Square;
