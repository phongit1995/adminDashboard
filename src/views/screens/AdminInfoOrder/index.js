import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import orderAPI from '../../../api/order';
import MainPage from '../../components/MainPage';
import FormInput from './components/FormInput';
import FormInput2 from './components/FormInput2';
import FormSelect from './components/FormSelect';
import Info from './components/Info';
import ListProduct from '../../components/ListProduct';
import styles from './AdminInfoOrder.module.scss';
import { ProtectedComponent } from '../../../utils/Protected';

function AdminInfoOrderPage() {
	const { id } = useParams();
	const [listProsuct, setListProduct] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await orderAPI.getDetial(id);
				console.log(res);
				if (res && res.status === 200) {
					if (res.data.products) {
						setListProduct([...res.data.products]);
					}
				}
			} catch (err) {}
		})();
	}, []);

	return (
		<MainPage>
			<section>
				<div className={styles.form}>
					<FormInput />
					<FormInput2 />
					<FormSelect />
					<Info />
				</div>
				<ProtectedComponent dependency={listProsuct.length > 0}>
					<div>
						<ListProduct list={listProsuct} />
					</div>
					<Button>商品追加</Button>
				</ProtectedComponent>
			</section>
		</MainPage>
	);
}

export default AdminInfoOrderPage;
