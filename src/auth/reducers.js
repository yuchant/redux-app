import * as actions from './actions';
import { Auth } from 'aws-amplify';


const auth = (state={
	loggedIn: false
}, action) => {
	switch(action.type) {
		
		case actions.SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				loggedIn: true,
				awsData: action.data
			})
		default: 
			return state
	}
}

const reducers = (state={}, action) => {
	state.auth = auth(state, action);
	return state
}

export default reducers;