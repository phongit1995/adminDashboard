import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';

import CurrentUser from './utils/CurrentUser';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/root.scss';

const store = createStore(reducers);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<CurrentUser>
				<App />
			</CurrentUser>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

reportWebVitals();
