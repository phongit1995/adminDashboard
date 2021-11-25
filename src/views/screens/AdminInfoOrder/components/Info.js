import { memo } from 'react';

import { Form } from 'react-bootstrap';
import styles from '../AdminInfoOrder.module.scss';

function Info() {
	return (
		<div className="mt-3">
			<Form>
				<div className="row">
					<div className="col col-lg-8">
						<div className="row">
							<div className="col col-lg-12">
								<div className="mb-3">
									<p>Order no</p>
									<p> Text </p>
								</div>
							</div>
							<div className="col col-lg-4">
								<div className="mb-3">
									<p>Order date</p>
									<p> Text </p>
								</div>
							</div>
							<div className="col col-lg-4 offset-md-4">
								<div className="mb-3">
									<p>Order date</p>
									<p> Text </p>
								</div>
							</div>
							<div className="col col-lg-2">
								<div className="mb-3">
									<p>Order no</p>
									<p> Text </p>
								</div>
							</div>
							<div className="col col-lg-2">
								<div className="mb-3">
									<p>Order date</p>
									<p> Text </p>
								</div>
							</div>
							<div className="col col-lg-4">
								<Form.Group className="mb-3">
									<Form.Label>Order date</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
							<div className="col col-lg-4">
								<div className="mb-3">
									<p>Order date</p>
									<p> Text </p>
								</div>
							</div>
						</div>
					</div>
					<div className="col col-lg-4">
						<div className="mb-3">
							<Form.Control
								as="textarea"
								className={styles.textArea}
							/>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default memo(Info);
