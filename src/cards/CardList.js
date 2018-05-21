import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getComponent } from "../utils/DynamicComponent";

const mapStateToProps = state => {
  return {
    cards: state.cards.map(id => {
      return state.cardsByID[id];
    })
  };
};

const CardWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledCardList = styled.div`
  padding-bottom: 50px;
`;

export const CardList = props => {
  console.log("CardList Unconnected", props);
  return (
    <StyledCardList>
      {props.cards
        ? props.cards.map(card => {
            const Component = getComponent(card.type);
            return (
              <CardWrapper>
                <Component {...card} />
              </CardWrapper>
            );
          })
        : null}
    </StyledCardList>
  );
};

const ConnectedCardList = connect(mapStateToProps, null)(CardList);
export default ConnectedCardList;
