import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import cyan from "@material-ui/core/colors/cyan";

const style = {
  background: "#4ebad1"
};

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  display: block;
`;

const StyledCTA = styled.div`
  text-align: center;
  padding: 60px 0;
  a {
    text-decoration: none;
  }
`;

const styles = {
  card: {
    backgroundColor: cyan[500]
  },
  title: {
    fontSize: 45,
    fontFamily: "Playfair Display",
    color: "white",
    padding: "0 20px"
  },
  subtitle: {
    color: "white"
  }
  // subtitle = { props.subtitle }
  // subtitleColor = "white"
  // subtitleStyle = {{
  //   marginTop: "1em",
  //     fontFamily: "Montserrat",
  //       fontWeight: "bold"
  // }}
  // />
};
const CTA = props => {
  let url;
  if (props.url) {
    url = props.url;
  } else {
    url = `/card/${props.id}`;
  }
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <StyledLink to={url}>
        <StyledCTA>
          <Typography className={classes.title} component="h1">
            {props.title}
          </Typography>
          <Typography className={classes.subtitle} component="p">
            {props.subtitle}
          </Typography>
        </StyledCTA>
      </StyledLink>
    </Card>
  );
};

export default withStyles(styles)(CTA);
