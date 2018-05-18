import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import * as icons from "@material-ui/icons/";
import Paper from "@material-ui/core/Paper";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const navigationItems = [
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
    label: "Micro Steps",
    to: "/micro-steps",
    icon: <icons.Favorite />
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
