import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Routers from './routers';

import SideBar from './views/components/SideBar';
import ScrollToTop from './utils/ScrollToTop';
import { ProtectedComponent } from './utils/Protected';

function App() {
	const { isLogged } = useSelector(state => state.auth);
	return (
		<Router>
			<ScrollToTop />
			<ProtectedComponent dependency={isLogged}>
				<SideBar />
			</ProtectedComponent>
			<Routers />
		</Router>
	);
}

export default App;
