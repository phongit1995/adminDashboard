import axiosClient from '.';

const routeName = '/admin';

const authAPI = {
	login: (data, tokenAxios) => {
		const url = `${routeName}/login`;
		return axiosClient.post(url, { ...data }, { cancelToken: tokenAxios });
	},
};

export default authAPI;
