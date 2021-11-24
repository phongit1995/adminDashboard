import React from 'react';

import MainPage from '../../components/MainPage';
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function AdminOrderPage() {
	return (
		<MainPage>
			<section>
				<h1>Order</h1>
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
						<tr>
							<td>
								<NavLink to="/order/alskdh">097097123</NavLink>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
						</tr>
					</tbody>
				</Table>
			</section>
		</MainPage>
	);
}

export default AdminOrderPage;
