import React from 'react';

import MainPage from '../../components/MainPage';
import FormInput from './components/FormInput';
import FormInput2 from './components/FormInput2';
import FormSelect from './components/FormSelect';
import Info from './components/Info';
import styles from './AdminInfoOrder.module.scss';

function AdminInfoOrderPage() {
	return (
		<MainPage>
			<section>
				<div className={styles.form}>
					<FormInput />
					<FormInput2 />
					<FormSelect />
					<Info />
				</div>
			</section>
		</MainPage>
	);
}

export default AdminInfoOrderPage;
