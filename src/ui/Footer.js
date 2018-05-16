import React, { Component } from "react";
import styled from "styled-components";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import { Link } from "react-router-dom";

import Icon from "material-ui/svg-icons/toggle/radio-button-unchecked";

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
    to: "/"
  },
  {
    label: "Journeys",
    to: "/journeys"
  },
  {
    label: "ToDo",
    to: "/todo"
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
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            {navigationItems.map((item, i) => {
              return (
                <BottomNavigationItem
                  label={item.label}
                  onClick={() => this.select(i)}
                  style={{ textAlign: "center" }}
                  containerElement={<Link to={item.to} />}
                  icon={<Icon />}
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
