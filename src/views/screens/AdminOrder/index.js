import React, { useEffect, useState } from 'react';

import orderAPI from '../../../api/order';
import MainPage from '../../components/MainPage';
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import styles from './AdminOrder.module.scss';

function AdminOrderPage() {
	const [list, setList] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await orderAPI.getAll();
				console.log(res);
				if (res && res.status === 200) {
					setList([...res.data]);
				}
			} catch (err) {}
		})();
	}, []);

	return (
		<MainPage>
			<section>
				<div className={styles.title}>
					<h1>Order page</h1>{' '}
					<NavLink to="/order/new" className="btn btn-primary">
						新規作成
					</NavLink>
				</div>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Order No</th>
							<th>Order Date</th>
							<th>Customer name</th>
							<th>Address</th>
							<th>TEL</th>
							<th>How to Pickup</th>
							<th>Payment method</th>
							<th>Delivery date</th>
							<th>Delivery time</th>
							<th>Status​</th>
						</tr>
					</thead>
					<tbody>
						{list.map((item, index) => (
							<tr key={item._id}>
								<td>
									<NavLink to="/order/alskdh">
										{item.orderNo}
									</NavLink>
								</td>
								<td>
									{new Date(
										item.orderDate,
									).toLocaleDateString('en-GB')}
								</td>
								<td>{item.name}</td>
								<td>{item.shippingAddress}</td>
								<td>{item.phone}</td>
								<td>{item.orderType}</td>
								<td>{item.paymentMethod}</td>
								<td>
									{new Date(
										item.deliveryDate,
									).toLocaleDateString('en-GB')}
								</td>
								<td>{item.deliveryTime}</td>
								<td>{item.status}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</section>
		</MainPage>
	);
}

export default AdminOrderPage;
