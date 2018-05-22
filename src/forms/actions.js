export const FORM_CHANGE = 'FORM_CHANGE';
export const formChange = (form, field, value) => {
	return {
		type: FORM_CHANGE,
		form,
		field,
		value
	}
}


export const FORM_DELETE = 'FORM_DELETE';
export const formDelete = (form) => {
	return {
		type: FORM_DELETE,
		form
	}
}

export const FORM_ERROR = 'FORM_ERROR';
export const formError = (form, message) => {
	return {
		type: FORM_ERROR,
		form,
		message
	}
}