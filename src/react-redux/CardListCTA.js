import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  transition: all 0.3s ease 0s;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledCTA = styled.div`
  text-align: center;
  padding: 40px 0;
  a {
    text-decoration: none;
  }
`;
const CTA = props => {
  const url = `/card/${props.id}`;
  return (
    <Card containerStyle={style}>
      <StyledLink to={url}>
        <StyledCTA>
          <CardTitle title={props.title} titleColor="white" />
        </StyledCTA>
      </StyledLink>
    </Card>
  );
};

export default CTA;
