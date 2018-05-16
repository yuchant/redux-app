import React from "react";
import { render } from "react-dom";
import ToDoReactRedux from "./react-redux";
import styled from "styled-components";

const Label = styled.div`
  font-size: 10px;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Group = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px 10px;
`;

const App = () => (
  <div>
    <ToDoReactRedux />
  </div>
);

render(<App />, document.getElementById("root"));
