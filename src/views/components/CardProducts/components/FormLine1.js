import { memo } from 'react';
import { Form } from 'react-bootstrap';

import '../CardProducts.scss';

function FormLine1({ product }) {
	return (
		<Form>
			{console.log(product)}
			<div className="title">
				<strong>Text 1</strong> <span>No. 1</span>
			</div>
			<div className="card-line row">
				<div className="col col-lg-4">
					<Form.Group className="mb-2">
						<Form.Label>Product name</Form.Label>
						<Form.Control
							type="text"
							defaultValue={product?.name}
						/>
					</Form.Group>
				</div>
				<div className="col col-lg-8">
					<div className="row">
						<div className="col col-lg-8">
							<div className="row">
								<div className="col col-lg-4">
									<Form.Group className="mb-2">
										<Form.Label>Quantity</Form.Label>
										<Form.Control
											type="text"
											defaultValue={product?.quantity}
										/>
									</Form.Group>
								</div>
								<div className="col col-lg-4">
									<Form.Group className="mb-2">
										<Form.Label>Price</Form.Label>
										<Form.Control
											type="text"
											defaultValue={product?.price}
										/>
									</Form.Group>
								</div>
								<div className="col col-lg-4">
									<Form.Group className="mb-2">
										<Form.Label>Total price</Form.Label>
										<Form.Control
											type="text"
											defaultValue={
												product?.price *
												product?.quantity
											}
										/>
									</Form.Group>
								</div>
							</div>
						</div>
						<div className="col col-lg-4">
							<Form.Label>&nbsp;</Form.Label>
							<Form.Select aria-label="Default select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</div>
					</div>
				</div>
			</div>
		</Form>
	);
}

export default memo(FormLine1);
