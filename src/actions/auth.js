import { AUTH_LOGIN, AUTH_LOGOUT, USER_CURRENT } from '../constants/typeAuth';

export const login = data => ({ type: AUTH_LOGIN, payload: data });
export const logout = () => ({ type: AUTH_LOGOUT });
export const currentUser = () => ({ type: USER_CURRENT });
