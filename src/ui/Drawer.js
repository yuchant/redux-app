import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { closeNavbar } from "./uiActions";

const mapStateToProps = state => {
  return {
    open: state.ui.navbarOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestChange: open => {
      dispatch(closeNavbar(open));
    }
  };
};

const MyDrawer = props => {
  return (
    <div>
      <Drawer
        docked={false}
        width={180}
        open={props.open}
        onRequestChange={open => props.onRequestChange(open)}
      >
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer);
