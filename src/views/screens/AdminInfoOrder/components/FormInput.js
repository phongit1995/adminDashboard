import { memo } from 'react';
import clsx from 'clsx';

import { Form, Button } from 'react-bootstrap';
import styles from '../AdminInfoOrder.module.scss';

function FormInput() {
	return (
		<div>
			<Form>
				<div className="row">
					<div className="col col-lg-8">
						<div className="row">
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
									<Form.Label>
										Ship only / Ship with pachase
									</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</div>
						</div>
					</div>
					<div className="col col-lg-4">
						<div className="row">
							<div className={clsx(styles.buttonGroup)}>
								<Button variant="primary">
									購入明細作成 PUSH通知
								</Button>
								<Button variant="primary">
									計量完了 PUSH通知
								</Button>
								<Button variant="primary">
									ベトナム配送完了 PUSH通知
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default memo(FormInput);
