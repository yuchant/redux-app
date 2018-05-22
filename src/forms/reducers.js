import { FORM_CHANGE, FORM_DELETE, FORM_ERROR } from "./actions";

const reducer = (state={
	signup: {}
}, action) => {
	switch (action.type) {
		case FORM_CHANGE:
			return Object.assign({}, state, {
				// ...state,
				[action.form]: Object.assign({}, state[action.form], {
					[action.field]: action.value
				})
			})
		case FORM_ERROR:
			return Object.assign({}, state, {
				// ...state,
				[action.form]: Object.assign({}, state[action.form], {
					errors: {
						message: action.message,
					}
				})
			})
		case FORM_DELETE:
			return Object.assign({}, state, {
				[action.form]: null,
			})
		default:
			return state
	}
}

// [action.form]: formReducer(state[action.form], action),

export default reducer;