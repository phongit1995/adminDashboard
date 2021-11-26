import axiosClient from '.';

import { getItemStorage } from '../utils/localStorage';
const routeName = '/pack';

const packAPI = {
	getAll: (page = 1, pageSize = 10, tokenAxios) => {
		const url = `${routeName}?page=${page}&pageSize=${pageSize}`;
		return axiosClient.get(url, {
			cancelToken: tokenAxios,
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	getDetial: (id, tokenAxios) => {
		const url = `${routeName}/${id}`;
		return axiosClient.get(url, {
			cancelToken: tokenAxios,
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
	create: (data, tokenAxios) => {
		const url = `${routeName}`;
		return axiosClient.post(url, data, {
			cancelToken: tokenAxios,
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
};

export default packAPI;
