import { memo } from 'react';

import { Form } from 'react-bootstrap';
import styles from '../AdminInfoOrder.module.scss';

function FormInput2() {
	return (
		<div className="mt-3">
			<Form>
				<div className="row">
					<div className="col col-lg-8">
						<div className="row">
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>Customer name</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>Customer Line Name</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>Customer e-mail</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>Address</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>TEL</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>Bill PDF URL</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
						</div>
					</div>
					<div className=" col col-lg-4">
						<Form.Group className="mb-3">
							<Form.Control
								as="textarea"
								className={styles.textArea}
							/>
						</Form.Group>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default memo(FormInput2);
