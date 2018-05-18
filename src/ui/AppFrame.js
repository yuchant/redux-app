import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Montserrat", sans-serif;
  max-width: 900px;
  margin: 0 auto;
`;

const InnerFrame = styled.div`
  position: relative;
  min-height: 100vh;
`;

const AppFrame = props => {
  return (
    <StyledFrame>
      <InnerFrame>{props.children}</InnerFrame>
    </StyledFrame>
  );
};
export default AppFrame;
