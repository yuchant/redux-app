import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import {
  updateMicroStep,
  completeMicroStep,
  deleteMicroStep
} from "./microstepActions";

import { withStyles } from "@material-ui/core/styles";
import ActionFavorite from "@material-ui/icons/Favorite";
import ActionFavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import { cyan, red } from "@material-ui/core/colors";
const log = console.log.bind(this, "[MicroStepItem.js]");

const TextInput = styled.input`
  padding: 5px 10px;
  margin-left: 10px;
  min-width: 200px;
`;

const StyledMicroStep = styled.div`
  border: 1px solid #eee;
  padding: 5px 10px;
  ${props =>
    props.complete &&
    css`
      ${TextInput} {
        text-decoration: line-through;
        color: green;
      }
    `};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, id) => {
      log("onChange() of input. Action generated", id);
      dispatch(updateMicroStep(event.target.value, id));
    },
    onDelete: (event, id) => {
      log("onDelete()", id);
      dispatch(deleteMicroStep(id));
    },
    onCheckboxChange: (event, id) => {
      const isComplete = event.target.checked;
      log("onCheckboxChange() of input. Action generated", id, isComplete);
      dispatch(completeMicroStep(isComplete, id));
    }
  };
};

const styles = theme => ({
  icon: {
    fontSize: 32,
    color: cyan[500],
    marginRight: 10
  },
  delete: {
    color: red[500]
  },
  category: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: 9,
    letterSpacing: ".05em",
    color: cyan[900]
  },
  formLabel: {
    fontSize: 14
  },
  summaryContent: {
    justifyContent: "space-between"
  },
  details: {
    display: "block"
  }
});


class MicroStep extends React.Component {
  state = {
    expanded: false
  };

  onChange() {
    this.setState(prevState => {
      return {
        expanded: !prevState.expanded
      };
    });
  }
  render() {
    const { classes } = this.props;
    log(this.props);
    return (
      <ExpansionPanel
        expanded={this.state.expanded}
        onChange={this.onChange.bind(this)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
            content: classes.summaryContent
          }}
        >
          <FormControlLabel
            onClick={event => event.stopPropagation()}
            classes={{
              label: classes.formLabel
            }}
            control={
              <Checkbox
                label="test"
                checkedIcon={<ActionFavorite className={classes.icon} />}
                icon={<ActionFavoriteBorder className={classes.icon} />}
                checked={this.props.complete}
                onChange={event => {
                  this.props.onCheckboxChange(event, this.props.id);
                  event.stopPropagation();
                  event.nativeEvent.stopImmediatePropagation();
                  return false;
                }}
                color="secondary"
              />
            }
            label={this.props.text}
          />
          <br />
          <Typography className={classes.category}>
            {this.props.category}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>{this.props.description}</Typography>
          <br />
          <Button
            className={classes.delete}
            size="small"
            onClick={event => {
              this.props.onDelete(event, this.props.id);
            }}
          >
            Delete
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(MicroStep));
