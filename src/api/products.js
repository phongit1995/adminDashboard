import axiosClient from '.';

import { getItemStorage } from '../utils/localStorage';
const routeName = '/product';

const productsAPI = {
	getAll: tokenAxios => {
		const url = `${routeName}/`;
		return axiosClient.get(url, {
			cancelToken: tokenAxios,
			headers: {
				Authorization: 'Bearer ' + getItemStorage('accessToken'),
			},
		});
	},
};

export default productsAPI;
