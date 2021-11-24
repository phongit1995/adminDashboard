import React from 'react';
import { Form, Button } from 'react-bootstrap';

import MainPage from '../../components/MainPage';
import styles from './AdminInfoPack.module.scss';

function AdminInfoPackPage() {
	return (
		<MainPage>
			<section>
				<Form>
					<div className="row">
						<div className="col col-lg-2">
							<Form.Group className="mb-3">
								<Form.Label>Pack no</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Oversea ship fee</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>To start ship date</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-2">
							<Form.Group className="mb-3">
								<Form.Label>Total price</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>JP domestic fee</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Arived date</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-2">
							<Form.Group className="mb-3">
								<Form.Label>Total wegiht</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>VN domestic fee</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Control
									as="textarea"
									className={styles.textArea}
								/>
							</Form.Group>
						</div>
						<div className="col col-lg-2">
							<Form.Select aria-label="Default select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</div>
					</div>
					<div className={styles.groupBtn}>
						<Button className={styles.submit} variant="primary">
							登録
						</Button>
					</div>
				</Form>
			</section>
		</MainPage>
	);
}

export default AdminInfoPackPage;
