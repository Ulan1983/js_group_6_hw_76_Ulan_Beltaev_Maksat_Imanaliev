import {
	GET_DATA_ERROR,
	GET_DATA_SUCCESS,
	SEND_DATA_ERROR,
	SEND_DATA_SUCCESS
} from "./actions";

const initialState = {
	messages: [],
	message: '',
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_DATA_SUCCESS:
			return {
				...state,
				message: action.data
			};
		case SEND_DATA_ERROR:
			return {
				...state,
				error: action.error
			};
		case GET_DATA_SUCCESS:
			return {
				...state,
				messages: action.messages
			};
		case GET_DATA_ERROR:
			return {
				...state,
				error: action.error
			};
		default:
			return state
	}
};

export default reducer;