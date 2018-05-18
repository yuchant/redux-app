import React from "react";
import { connect } from "react-redux";
import {withStyles} from "@material-ui/core/styles";

import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';



const mapStateToProps = (state) => {
	return {
		open: state.ui.notificationOpen,
		message: state.ui.notificationMessage,
	}
}

const styles = {
	bar: {
		"& a": {
			color: "inherit"
		}
	},
	content: {
		textAlign: "center",
		display: 'flex',
		alignItems: 'center'
	}
}

const NotificationBar = (props) => {
	const { classes } = props;
	return (
		<Snackbar
	      open={props.open}
	      anchorOrigin={{
	      	vertical: "bottom",
	      	horizontal: "right"
	      }}
	      classes={{
	      	root: classes.bar,
	      	anchorOriginBottomRight: classes.content
	      }}
	      ContentProps={{
	        'aria-describedby': 'message-id',
	      }}
	      message={<span id="message-id">{props.message}</span>}
	    />

	)
		    	      // TransitionComponent={<Slide {...props} direction="up" />}

}

export default connect(mapStateToProps)(withStyles(styles)(NotificationBar));