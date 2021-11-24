import { memo } from 'react';

import { Form } from 'react-bootstrap';
import styles from '../AdminInfoOrder.module.scss';

function FormInput2() {
	return (
		<div className="mt-3">
			<Form>
				<div className="row">
					<div className="row col col-lg-8">
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Label>Order no</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Label>Order date</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Label>Order date</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Label>Order no</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Label>Order date</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
						<div className="col col-lg-4">
							<Form.Group className="mb-3">
								<Form.Label>Order date</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
					</div>
					<div className="row col col-lg-4">
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
