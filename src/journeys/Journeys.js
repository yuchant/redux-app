import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { store } from "../app";
import { CardList } from "../cards/CardList";
import { getArticles } from "../data/dataActions";
import { Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const log = console.log.bind(this, "[Journeys.js]");

const mapStateToProps = (state, ownProps) => {
  const journeys = state.journeys;
  return {
    hasConfigured: journeys.hasConfigured,
    myTopics: journeys.myTopics,
    myArticleCards: journeys.myArticleCards,
    isFetching: state.isFetching
  };
};

const StyledJourneys = styled.div``;

const StyledHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

// for mui
const styles = {
  yourJourneys: {
    marginTop: 10
  },
  configureLink: {
    textDecoration: "underline",
    color: "inherit"
  }
};

class Journeys extends React.Component {
  componentWillMount() {
    if (this.props.hasConfigured && !this.props.isFetching) {
      this.props.myTopics;
      const limit = 4;
      const articleNames = this.props.myTopics.map(topic => topic.name);
      store.dispatch(getArticles(articleNames, limit));
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <StyledJourneys>
        {this.props.hasConfigured ? null : (
          <Redirect to="/journeys/configure" />
        )}
        {this.props.hasConfigured ? (
          <div>
            <StyledHeader>
              <Typography variant="display1" align="center">
                Your Journey
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.yourJourneys}
              >
                Your topics:{" "}
                <Link
                  to="/journeys/configure"
                  className={classes.configureLink}
                >
                  {this.props.myTopics
                    .map(topic => {
                      return topic.name;
                    })
                    .join(", ")}
                </Link>
              </Typography>
            </StyledHeader>
            <CardList cards={this.props.myArticleCards} />
          </div>
        ) : null}
      </StyledJourneys>
    );
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Journeys));
