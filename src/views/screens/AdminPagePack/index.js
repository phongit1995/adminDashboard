import { memo, useState, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

import packAPI from '../../../api/pack';
import MainPage from '../../components/MainPage';
import { Table } from 'react-bootstrap';
import styles from './AdminPagePack.module.scss';

function AdminPagePackPage() {
	const pageSize = 10;
	const [page, setPage] = useState(1);
	const [list, setList] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		(async () => {
			try {
				const res = await packAPI.getAll(page, pageSize);
				if (res && res.status === 200) {
					setList([...res.data]);
					setCount(Math.ceil(res.countDocuments / 10));
				}
			} catch (err) {}
		})();
	}, [page, pageSize]);

	const pagination = useMemo(() => {
		let pagination = [];
		for (let i = 1; i <= count; i++) {
			pagination.push(
				<Pagination.Item
					key={i}
					active={i === page}
					onClick={() => setPage(i)}
				>
					{i}
				</Pagination.Item>,
			);
		}

		return pagination;
	}, [count, page]);

	return (
		<MainPage>
			<section>
				<div className={styles.title}>
					<h1>Pack page</h1>{' '}
					<NavLink to="/pack/new" className="btn btn-primary">
						新規作成
					</NavLink>
				</div>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>PACK NO</th>
							<th>Total price</th>
							<th>Total wegiht</th>
							<th>Oversea fee</th>
							<th>JP domestic fee</th>
							<th>VN domestic fee</th>
							<th>To start ship date</th>
							<th>Arrived date</th>
							<th>Status​</th>
						</tr>
					</thead>
					<tbody>
						{list.map((item, index) => (
							<tr key={item._id}>
								<td>{item.packNo}</td>
								<td>{item.totalPrice}</td>
								<td>{item.totalWegiht}</td>
								<td>{item.overseaFee}</td>
								<td>{item.jpDomesticFee}</td>
								<td>{item.vnDomesticFee}</td>
								<td>
									{new Date(
										item.startShipDate,
									).toLocaleDateString('en-GB')}
								</td>
								<td>
									{new Date(
										item.arrivedDate,
									).toLocaleDateString('en-GB')}
								</td>
								<td>{item.status}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Pagination>{pagination}</Pagination>
			</section>
		</MainPage>
	);
}

export default memo(AdminPagePackPage);
