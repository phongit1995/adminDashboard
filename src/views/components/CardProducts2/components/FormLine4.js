import { memo } from 'react';
import { Form } from 'react-bootstrap';

import '../CardProducts.scss';

function FormLine4() {
	return (
		<Form>
			<div className="card-line row">
				<div className="col col-lg-4">
					<Form.Group className="mb-3">
						<Form.Control
							as="textarea"
							className="textarea-card "
						/>
					</Form.Group>
				</div>
				<div className="col col-lg-4">
					<Form.Group className="mb-3">
						<Form.Control
							as="textarea"
							className="textarea-card "
						/>
					</Form.Group>
				</div>
			</div>
		</Form>
	);
}

export default memo(FormLine4);
