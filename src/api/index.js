import axios from 'axios';
import { API_URL } from '../constants/config';
import queryString from 'query-string';

const axiosClient = axios.create({
	headers: {
		'content-type': 'application/json',
	},
	baseURL: API_URL,
	paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
	return config;
});

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	error => {
		if (!axios.isCancel(error)) throw error;
	},
);

export default axiosClient;
