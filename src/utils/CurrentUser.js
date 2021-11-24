import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItemStorage } from '../utils/localStorage';
import { currentUser } from '../actions/auth';
import { SITE_UNLOCK_LOAD } from '../constants/typeSite';

export default function CurrentUser({ children }) {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.site);

	useEffect(() => {
		const unLock = () => {
			dispatch({ type: SITE_UNLOCK_LOAD });
		};

		const token = getItemStorage('accessToken');
		if (token !== null) {
			dispatch(currentUser(token));
		}
		unLock();
	}, [dispatch]);

	return <React.Fragment>{isLoading && children}</React.Fragment>;
}
