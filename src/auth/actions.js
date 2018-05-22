import { Auth } from 'aws-amplify';
import sha from 'sha.js';
import { showLoader, hideLoader } from "../ui/uiActions";
import { formError } from "../forms/actions";

const log = console.log.bind(this, '[auth.actions.js]');


export const SIGNUP = "SIGNUP";
export const signup = (username, password) => {
	return {
		type: SIGNUP,
		username,
		password
	}
}

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const signupSuccess = (data) => {
	return {
		type: SIGNUP_SUCCESS,
		data
	}
}

export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const signupError = (message, code) => {
	return {
		type: SIGNUP_ERROR,
		message,
		code
	}
}

export const LOGOUT = "LOGOUT";
export const logout = (username, password) => {
	return {
		type: LOGOUT
	}
}

export const signupAsync = () => (dispatch, getState) => {
	// dispatch(showLoader("Signing Up"));
	const { 
		forms: { 
			signup: { 
				email, password
			}
		}
	} = getState();
	const username = new sha.sha256().update(email || '').digest('hex');
	log(`Logging in with email: ${email} username sha: ${username}`);
	Auth.signUp({
		username: email,
        password,
        attributes: {
        	email,
            // email,          // optional
            // phone_number,   // optional - E.164 number convention
            // // other custom attributes
        },
        validationData: []  //optional
    })
    .then(data => {
    	log('Signed up', data);
    	dispatch(signupSuccess(data));
    })
    .catch(error => {
    	// https://github.com/reduxjs/redux/issues/297
    	// How do we show a one time error message?
    	// According to this post, it does not belong in state.
    	log('Error', error);
    	// error can be a message object or error string
    	dispatch(formError('signup', error.message || error));
	})
	.then(() => {
		// dispatch(hideLoader());
	});
}


