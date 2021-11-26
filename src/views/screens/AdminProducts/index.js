import { memo, useState, useEffect } from 'react';

import MainPage from '../../components/MainPage';
import { Table } from 'react-bootstrap';
import productsAPI from '../../../api/products';

function AdminProductsPage() {
	const [listProducts, setListProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const res = await productsAPI.getAll();
			if (res.data) {
				setListProducts(res.data);
			}
			setIsLoading(false);
		})();
	}, []);

	return (
		<MainPage>
			<section>
				<h1>Products</h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Product name</th>
							<th>Quantity</th>
							<th>Total price</th>
							<th>Estimated weight</th>
							<th>Fixed weight</th>
							<th>Products url</th>
							<th>Order No</th>
							<th>Order Date</th>
							<th>PACK NO</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{listProducts.map(item => (
							<tr key={item?._id}>
								<td>{item?.name}</td>
								<td>{item?.quantity}</td>
								<td>{item?.totalPrice}</td>
								<td>{item?.estimatedWeight}</td>
								<td>{item?.fixedWeight}</td>
								<td>{item?.url}</td>
								<td>
									{new Date(
										item?.orderDate,
									).toLocaleDateString('en-GB')}
								</td>
								<td>
									{new Date(
										item?.orderDate,
									).toLocaleDateString('en-GB')}
								</td>
								<td>{item?.pack?.packNo}</td>
								<td>{item?.status}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</section>
		</MainPage>
	);
}

export default memo(AdminProductsPage);
