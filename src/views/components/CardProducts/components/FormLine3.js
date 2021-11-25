import { memo } from 'react';
import { Form } from 'react-bootstrap';

import '../CardProducts.scss';

function FormLine3() {
	return (
		<Form>
			<div className="card-line row">
				<div className="col col-lg-4">
					<Form.Group className="mb-2">
						<Form.Label>Product name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
				</div>
				<div className="col col-lg-4">
					<Form.Group className="mb-2">
						<Form.Label>Product name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
				</div>
			</div>
		</Form>
	);
}

export default memo(FormLine3);
