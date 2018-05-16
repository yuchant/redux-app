import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  padding-bottom: 60px;
`;

const AppFrame = props => {
  return <StyledFrame>{props.children}</StyledFrame>;
};
export default AppFrame;
