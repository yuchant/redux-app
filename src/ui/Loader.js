import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledLoader = styled.div`
  position: fixed;
  background: white;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => {
  return {
    loading: state.isFetching
  };
};

const Loader = props => (
  <StyledLoader visible={props.loading}>Fetching data...</StyledLoader>
);

export default connect(mapStateToProps, null)(Loader);
