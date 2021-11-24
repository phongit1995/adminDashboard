import React from 'react';
import { NavLink } from 'react-router-dom';

import MainPage from '../../components/MainPage';
import { Table } from 'react-bootstrap';

function AdminPagePackPage() {
	return (
		<MainPage>
			<section>
				<h1>Pack</h1>
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
						<tr>
							<td>
								<NavLink to={`/page-pack/lkhalksdh`}>
									Pack NO
								</NavLink>
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

export default AdminPagePackPage;
