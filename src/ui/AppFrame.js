import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
  font-family: "Montserrat", sans-serif;
`;

const AppFrame = props => {
  return <StyledFrame>{props.children}</StyledFrame>;
};
export default AppFrame;
