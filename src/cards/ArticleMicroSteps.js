import React from "react";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const log = console.log.bind(this, "[ArticleMicroSteps.js]");

const mapStateToProps = (state, ownProps) => {
  return {
    microSteps: ownProps.article.microSteps.filter(step => {
      // return only selected steps
      // state.todos.items.some()
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeMicroStep: (event, step) => {}
  };
};

class ArticleMicroSteps extends React.Component {
  render() {
    const article = this.props.article;
    log("Props", this.props);
    return (
      <div>
        MicroSteps for article {article.id}
        <br />
        {article.microSteps.map(step => {
          return (
            <FormGroup>
              <FormControlLabel
                label={step.text}
                control={
                  <Switch
                    value="checkedA"
                    onChange={event => {
                      this.props.onChangeMicroStep(event, step);
                    }}
                  />
                }
              />
            </FormGroup>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleMicroSteps);
