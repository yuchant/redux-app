import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {  TextField, Grid, Paper, Typography, Button } from "@material-ui/core/";
import { signupAsync } from "./actions";
import { formChange } from "../forms/actions";

const log = console.log.bind(this, '[Account.js]');


const mapStateToProps = (state) => {
	return {
		form: state.forms.signup,
	}
}

const mapDispatchToProps = () => (dispatch) => {
	return {
		handleSubmit: (event) => {
			event.preventDefault();
			dispatch(signupAsync());
		},
		handleEmailChange: (event, form, field) => {
			dispatch(formChange(form, field, event.target.value));
		},
		handlePasswordChange: (event, form, field) => {
			dispatch(formChange(form, field, event.target.value));
		}
	}
}

const StyledAccount = styled.div`
	text-align: center;
`

const styles = {
	grid: {
		justifyContent: "center",
		alignItems: "center",
		minHeight: "70vh"
	},
	paper: {
		textAlign: "center",
		padding: "40px 20px"
	},
	button: {
		marginTop: 30
	},
	input: {
		minWidth: 240
	}
}

const StyledTitle = styled.div`
	margin-bottom: 20px;
`

const StyledError = styled.div`
	color: red;
	margin: 1em 0;
`

const Account = (props) => {
	const { classes, form } = props;
	
	return (
		<Grid container spacing={24} className={classes.grid}>
			<Grid item xs={10}>
				<StyledAccount>
					<form onSubmit={props.handleSubmit}>
						<StyledTitle>
							<Typography variant="display1">
								Sign Up
							</Typography>
						</StyledTitle>
						<TextField
							label="Email address"
							type="email"
							className={classes.input}
							value={form.email}
							onChange={(event) => {
								props.handleEmailChange(event, 'signup', 'email');
							}}
						/>
						<br/>
						<br/>
						<TextField
							id="password"
							label="Password"
							type="password"
							className={classes.input}
							value={form.password}
							onChange={(event) => {
								props.handlePasswordChange(event, 'signup', 'password');
							}}
						/>
						<br/>
						{form.errors ? <StyledError>{form.errors.message}</StyledError> : null}
						
						<Button type="submit" variant="raised" color="primary" className={classes.button} value="Log In">
							Sign Up
						</Button>
						<br/><br/>
						OR
						Sign up with Google
					</form>
				</StyledAccount>
			</Grid>
		</Grid>
	)
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Account));