import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import Configure from "./Configure";

const log = console.log.bind(this, "[Journeys.js]");

const mapStateToProps = (state, ownProps) => {
  log("Match state to props", state, ownProps);
  const journeys = state.journeys;
  return {
    hasConfigured: journeys.hasConfigured
  };
};

const StyledJourneys = styled.div``;

class Journeys extends React.Component {
  render() {
    return (
      <StyledJourneys>
        {this.props.hasConfigured ? null : <Configure />}
      </StyledJourneys>
    );
  }
}

export default connect(mapStateToProps, null)(Journeys);
