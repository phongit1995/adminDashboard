import { memo } from 'react';
import { Form } from 'react-bootstrap';

import '../CardProducts.scss';

function FormLine2() {
	return (
		<Form>
			<div className="card-line row">
				<div className="col col-lg-9">
					<div className="row">
						<div className="col col-lg-6">
							<Form.Group className="mb-2">
								<Form.Label>Product url</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</div>
					</div>
				</div>
				<div className="col col-lg-3">
					<Form.Label>&nbsp;</Form.Label>
					<Form.Select aria-label="Default select example">
						<option>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select>
				</div>
			</div>
		</Form>
	);
}

export default memo(FormLine2);
