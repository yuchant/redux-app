import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeNavbar } from "./uiActions";
import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import * as icons from "@material-ui/icons";

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
    to: "/",
    icon: <icons.Home />
  },
  {
    label: "Journeys",
    to: "/journeys",
    icon: <icons.ChromeReaderMode />
  },
  {
    label: "Customize Journeys",
    to: "/journeys/configure",
    icon: <icons.Settings />
  },
  {
    label: "My Micro Steps",
    to: "/micro-steps",
    icon: <icons.Favorite />
  }
];

const styles = {
  drawer: {
    width: "250px"
  },
  icon: {
    marginRight: 0,
    fontSize: 18
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
        <List component="nav">
          {links.map(link => {
            return (
              <ListItem
                component={Link}
                to={link.to}
                onClick={props.onMenuItemClick}
              >
                <ListItemIcon className={classes.icon}>
                  {link.icon ? link.icon : null}
                </ListItemIcon>

                <ListItemText primary={link.label} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(MyDrawer)
);
