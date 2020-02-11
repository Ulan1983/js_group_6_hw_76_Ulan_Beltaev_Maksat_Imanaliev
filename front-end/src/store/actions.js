import axiosApi from "../axiosApi";

export const SEND_DATA_SUCCESS = 'SEND_DATA_SUCCESS';
export const SEND_DATA_ERROR = 'SEND_DATA_ERROR';

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export const sendDataSuccess = data => ({type: SEND_DATA_SUCCESS, data});
export const sendDataError = error => ({type: SEND_DATA_ERROR, error});

export const sendData = data => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/messages', data);
			dispatch(sendDataSuccess());
			dispatch(getData());
		} catch (e) {
			dispatch(sendDataError(e));
		}
	}
};

export const getDataSuccess = messages => ({type: GET_DATA_SUCCESS, messages});
export const getDataError = error => ({type: GET_DATA_ERROR, error});

export const getData = () => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/messages');
			dispatch(getDataSuccess(response.data));
		} catch (e) {
			dispatch(getDataError(e));
		}
	}
};



