import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeNavbar } from "./uiActions";
import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const mapStateToProps = state => {
  return {
    open: state.ui.navbarOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: open => {
      dispatch(closeNavbar(false));
    },
    onMenuItemClick: () => {
      dispatch(closeNavbar(false));
    }
  };
};

const links = [
  {
    label: "Home",
    to: "/"
  },
  {
    label: "Journeys",
    to: "/journeys"
  },
  {
    label: "Edit Journeys",
    to: "/journeys/configure"
  },

  {
    label: "My Micro Steps",
    to: "/micro-steps"
  }
];

const styles = {
  drawer: {
    width: "250px"
  }
};

const MyDrawer = props => {
  const { classes } = props;
  return (
    <div>
      <Drawer
        docked={false}
        className={classes.drawer}
        open={props.open}
        onClose={() => props.onClose()}
      >
        {links.map(link => {
          return (
            <Button
              component={Link}
              to={link.to}
              onClick={props.onMenuItemClick}
            >
              {link.label}
            </Button>
          );
        })}
      </Drawer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(MyDrawer)
);
