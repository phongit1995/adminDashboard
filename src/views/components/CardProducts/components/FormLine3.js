import { memo } from 'react';
import { Form } from 'react-bootstrap';

import '../CardProducts.scss';

function FormLine3({ product }) {
	return (
		<Form>
			<div className="card-line row">
				<div className="col col-lg-4">
					<Form.Group className="mb-2">
						<Form.Label>Estimate arrive from ec site</Form.Label>
						<Form.Control type="text" defaultValue={product.text} />
					</Form.Group>
				</div>
				<div className="col col-lg-4">
					<Form.Group className="mb-2">
						<Form.Label>Ship company</Form.Label>
						<Form.Control
							type="text"
							defaultValue={product.shipCompany}
						/>
					</Form.Group>
				</div>
			</div>
		</Form>
	);
}

export default memo(FormLine3);
