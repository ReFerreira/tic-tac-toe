import styled from "styled-components";

export const Container = styled.div`
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }

  .status {
    margin-bottom: 10px;
  }
`;
