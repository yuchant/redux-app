import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import {
  updateToDoItem,
  completeToDoItem,
  deleteToDoItem
} from "./todoActions";

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
const log = console.log.bind(this, "[ToDoItem.js]");

const TextInput = styled.input`
  padding: 5px 10px;
  margin-left: 10px;
  min-width: 200px;
`;

const StyledToDoItem = styled.div`
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
  small {
    font-family: sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.1;
  }
`;

const Delete = styled.button`
  margin-left: 10px;
`;

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, index) => {
      log("onChange() of input. Action generated", index);
      dispatch(updateToDoItem(event.target.value, index));
    },
    onDelete: (event, index) => {
      log("onDelete()", index);
      dispatch(deleteToDoItem(index));
    },
    onCheckboxChange: (event, index) => {
      const isComplete = event.target.checked;
      log("onCheckboxChange() of input. Action generated", index, isComplete);
      dispatch(completeToDoItem(isComplete, index));
    }
  };
};

const styles = theme => ({
  root: {
    width: "40px"
  },
  icon: {
    fontSize: "30px"
  }
});

@withStyles(styles)
class ToDoItem extends React.Component {
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
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <FormControlLabel
            onClick={event => event.stopPropagation()}
            control={
              <Checkbox
                label="test"
                checkedIcon={<ActionFavorite className={classes.icon} />}
                icon={<ActionFavoriteBorder className={classes.icon} />}
                checked={this.props.complete}
                style={{ widht: "50px" }}
                onChange={event => {
                  this.props.onCheckboxChange(event, this.props.index);
                  event.stopPropagation();
                  event.nativeEvent.stopImmediatePropagation();
                  return false;
                }}
                color="secondary"
              />
            }
            label={this.props.text}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>

          <Delete
            onClick={event => {
              this.props.onDelete(event, this.props.index);
            }}
          >
            Delete
          </Delete>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default connect(null, mapDispatchToProps)(ToDoItem);
