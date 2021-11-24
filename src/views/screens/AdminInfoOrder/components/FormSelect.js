import { memo } from 'react';

import { Form } from 'react-bootstrap';

function FormSelect() {
	return (
		<div>
			<Form>
				<div className="row">
					<div className="row col col-lg-8">
						<div className="col col-lg-4">
							<Form.Select aria-label="Default select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</div>
						<div className="col col-lg-4">
							<Form.Select aria-label="Default select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</div>
						<div className="col col-lg-4">
							<Form.Select aria-label="Default select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default memo(FormSelect);
