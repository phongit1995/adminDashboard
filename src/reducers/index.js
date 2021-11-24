import { combineReducers } from 'redux';

import authReducer from './auth';
import siteReducer from './site';

const reducers = combineReducers({
	auth: authReducer,
	site: siteReducer,
});

export default reducers;
