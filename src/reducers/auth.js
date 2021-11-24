import { AUTH_LOGIN, AUTH_LOGOUT, USER_CURRENT } from '../constants/typeAuth';
import {
	setItemStorage,
	deleteItemStorage,
	getItemStorage,
} from '../utils/localStorage';

const initialState = {
	isLogged: false,
	token: null,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case AUTH_LOGIN:
			const tokenLogin = payload.token;
			setItemStorage('accessToken', tokenLogin);
			return {
				...state,
				token: tokenLogin,
				isLogged: true,
			};
		case AUTH_LOGOUT:
			deleteItemStorage('accessToken');
			return { ...state, isLogged: false };
		case USER_CURRENT:
			return {
				...state,
				token: getItemStorage('accessToken'),
				isLogged: true,
			};
		default:
			return state;
	}
};

export default authReducer;
