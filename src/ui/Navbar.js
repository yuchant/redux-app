import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import { connect } from "react-redux";
import { openNavbar } from "./uiActions";

const log = console.log.bind(this, "[Navbar.js]");
const mapDispatchToProps = dispatch => {
  return {
    onMenuClick: () => {
      log("Clicked");
      dispatch(openNavbar());
    }
  };
};

const StyledAppBar = styled.div`
  margin-bottom: 10px;
`;

const Navbar = props => {
  return (
    <StyledAppBar>
      <AppBar title="" onLeftIconButtonClick={props.onMenuClick} />
    </StyledAppBar>
  );
};

export default connect(null, mapDispatchToProps)(Navbar);
