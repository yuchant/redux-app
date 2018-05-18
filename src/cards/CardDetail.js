import React from "react";
import { connect } from "react-redux";
import { getArticle } from "../data/dataActions";
import { Typography } from "@material-ui/core/";
import styled from "styled-components";
import cyan from "@material-ui/core/colors/cyan";
import { Link } from "react-router-dom";
import StyledCategory from "../common/StyledCategory";
import Divider from "@material-ui/core/Divider";
import ArticleMicroSteps from "./ArticleMicroSteps";

const log = console.log.bind(this, "[CardDetail.js]");

const mapStateToProps = (state, ownProps) => {
  log("Match state to props", state, ownProps);
  return {
    article: state.cardsByID[ownProps.match.params.id],
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticle: id => {
      console.log("Getting Article by ID", id);
      dispatch(getArticle(id));
    }
  };
};

const StyledArticle = styled.article`
  padding-top: 20px;
  padding-bottom: 80px;
  p {
    line-height: 1.4;
  }
  a {
    color: ${cyan[900]};
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  display: block;
  margin-top: 1em;
  margin-bottom: 30px;
`;

const StyledHeader = styled.div`
  padding: 0 0px;
  margin-bottom: 30px;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 10px;
`;

const StyledSubtitle = styled.div`
  font-style: italic;
  font-size: 18px;
  margin-top: 20px;
  font-family: "Playfair Display";
  text-align: center;
  line-height: 1.4;
`;

const StyledBody = styled.div`
  padding: 0 10px;
  font-size: 16px;
`;

const StyledMicroSteps = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
`;

const StyledArticleMicroSteps = styled.div`
  margin-top: 30px;
`;

class CardWithData extends React.Component {
  componentWillMount() {
    if (!this.props.article) {
      this.props.getArticle(this.props.match.params.id);
    }
  }

  componentWillUpdate() {
    // if the component is already mounted, we still need to fetch new data
    if (!this.props.article) {
      this.props.getArticle(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.article) {
      // we have a global loader that will take care of this.
      return null;
    }
    const article = this.props.article;
    return (
      <StyledArticle className="article">
        <StyledHeader>
          <StyledCategory>{article.category}</StyledCategory>
          <StyledTitle variant="display1" align="center">
            {article.title}
          </StyledTitle>
          <StyledSubtitle>{article.subtitle}</StyledSubtitle>
          <StyledMicroSteps>
            This article contains 3 Micro Steps.
          </StyledMicroSteps>
        </StyledHeader>
        <div>
          <FeaturedImage src={article.img} />
        </div>
        <StyledBody>
          <Typography
            variant="body"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </StyledBody>
        <StyledArticleMicroSteps>
          <ArticleMicroSteps article={article} />
        </StyledArticleMicroSteps>
      </StyledArticle>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWithData);
