import React from "react";
import { connect } from "react-redux";

const log = console.log.bind(this, "[CardDetail.js]");

const mapStateToProps = (state, ownProps) => {
  log("Match state to props", state, ownProps);
  return {
    card: state.cardsByID[ownProps.match.params.id]
  };
};

const CardDetail = ({ match }) => {
  return <div>Card Detail for Card ID: {match.params.id}</div>;
};

export default connect(mapStateToProps, null)(CardDetail);
