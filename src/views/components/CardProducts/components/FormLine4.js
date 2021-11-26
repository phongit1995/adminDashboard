import { memo } from 'react';
import { Form } from 'react-bootstrap';

import '../CardProducts.scss';

function FormLine4({ product }) {
	return (
		<Form>
			<div className="card-line row">
				<div className="col col-lg-4">
					<Form.Group className="mb-3">
						<Form.Control
							as="textarea"
							className="textarea-card"
							defaultValue={product.text}
						/>
					</Form.Group>
				</div>
				<div className="col col-lg-4">
					<Form.Group className="mb-3">
						<Form.Control
							as="textarea"
							className="textarea-card"
							defaultValue={product.text}
						/>
					</Form.Group>
				</div>
				<div className="col col-lg-4">
					<div className="group-btn--products">
						<button className="btn btn-danger">削除</button>
					</div>
				</div>
			</div>
		</Form>
	);
}

export default memo(FormLine4);
