import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import packAPI from '../../../api/pack';
import { listStatus } from '../../../constants/statusPack';
import MainPage from '../../components/MainPage';
import styles from './AdminCreatePack.module.scss';

function AdminCreatePackPage() {
	const [form, setForm] = useState({
		arrivedDate: '',
		jpDomesticFee: '',
		note: '',
		overseaFee: '',
		packNo: '',
		startShipDate: '',
		status: '',
		totalPrice: '',
		totalWegiht: '',
		vnDomesticFee: '',
	});

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setForm({ ...form, [key]: value });
	};

	const handleSubmit = e => {
		(async () => {
			try {
				const res = await packAPI.create(form);
				if (res.status === 200) {
					console.log(res);
					setForm({
						arrivedDate: '',
						jpDomesticFee: '',
						note: '',
						overseaFee: '',
						packNo: '',
						startShipDate: '',
						status: '',
						totalPrice: '',
						totalWegiht: '',
						vnDomesticFee: '',
					});
				}
			} catch (err) {}
		})();
	};

	return (
		<MainPage>
			<section>
				<Form>
					<div className="row">
						<div className="col col-lg-2">
							<Form.Group className="mb-3">
								<Form.Label>Pack no</Form.Label>
								<Form.Control
									required
									type="text"
									name="packNo"
									onChange={handleChange}
									value={form.packNo}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Oversea ship fee</Form.Label>
								<Form.Control
									required
									type="text"
									name="overseaFee"
									onChange={handleChange}
									value={form.overseaFee}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>To start ship date</Form.Label>
								<Form.Control
									required
									type="text"
									name="startShipDate"
									onChange={handleChange}
									value={form.startShipDate}
								/>
							</Form.Group>
						</div>
						<div className="col col-lg-2">
							<Form.Group className="mb-3">
								<Form.Label>Total price</Form.Label>
								<Form.Control
									required
									type="text"
									name="totalPrice"
									onChange={handleChange}
									value={form.totalPrice}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>JP domestic fee</Form.Label>
								<Form.Control
									required
									type="text"
									name="jpDomesticFee"
									onChange={handleChange}
									value={form.jpDomesticFee}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Arived date</Form.Label>
								<Form.Control
									required
									type="text"
									name="arrivedDate"
									onChange={handleChange}
									value={form.arrivedDate}
								/>
							</Form.Group>
						</div>
						<div className="col col-lg-2">
							<Form.Group className="mb-3">
								<Form.Label>Total wegiht</Form.Label>
								<Form.Control
									required
									type="text"
									name="totalWegiht"
									onChange={handleChange}
									value={form.totalWegiht}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>VN domestic fee</Form.Label>
								<Form.Control
									required
									type="text"
									name="vnDomesticFee"
									onChange={handleChange}
									value={form.vnDomesticFee}
								/>
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Control
									required
									as="textarea"
									name="note"
									onChange={handleChange}
									value={form.note}
									className={styles.textArea}
								/>
							</Form.Group>
						</div>
						<div className="col col-lg-2">
							<Form.Select
								required
								name="status"
								onChange={handleChange}
								aria-label="Default select example"
							>
								{listStatus.map(item => (
									<option key={item.text} value={item.value}>
										{item.text}
									</option>
								))}
							</Form.Select>
						</div>
					</div>
					<div className={styles.groupBtn}>
						<Button
							className={styles.submit}
							variant="primary"
							onClick={handleSubmit}
						>
							登録
						</Button>
					</div>
				</Form>
			</section>
		</MainPage>
	);
}

export default AdminCreatePackPage;
