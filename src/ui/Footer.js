import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledBottomNavigationItem = styled.div`
  display: inline-block;
  text-align: center;
  font-size: 12px;
`;

const navigationItems = [
  {
    label: "Home",
    to: "/",
    icon: <RestoreIcon />
  },
  {
    label: "Journeys",
    to: "/journeys",
    icon: <LocationOnIcon />
  },
  {
    label: "Micro Steps",
    to: "/micro-steps",
    icon: <FavoriteIcon />
  }
];

class Footer extends Component {
  state = {
    selectedIndex: 0
  };

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <StyledFooter>
        <Paper elevation={4}>
          <BottomNavigation selectedIndex={this.state.selectedIndex} showLabels>
            {navigationItems.map((item, i) => {
              return (
                <BottomNavigationAction
                  label={item.label}
                  onClick={() => this.select(i)}
                  style={{ textAlign: "center" }}
                  component={Link}
                  to={item.to}
                  icon={item.icon}
                />
              );
            })}
          </BottomNavigation>
        </Paper>
      </StyledFooter>
    );
  }
}

export default Footer;
