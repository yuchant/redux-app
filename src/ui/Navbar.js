import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { openNavbar } from "./uiActions";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

const styles = {
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  menuIcon: {
    color: "white"
  },
  title: {
    color: "white",
    marginLeft: "15px",
    fontSize: 20,
    letterSpacing: ".07em",
    fontWeight: "bold"
  },
  button: {
    color: "white",
    letterSpacing: ".05em",
    fontWeight: "bold",
    fontSize: 13
  }
};

const Navbar = props => {
  const { classes } = props;
  return (
    <StyledAppBar>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={props.onMenuClick}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.title}>
            THRIVE APP
          </Typography>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </StyledAppBar>
  );
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Navbar));
