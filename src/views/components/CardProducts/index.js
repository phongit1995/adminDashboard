import { memo } from 'react';

import FormLine1 from './components/FormLine1';
import FormLine2 from './components/FormLine2';
import FormLine3 from './components/FormLine3';
import FormLine4 from './components/FormLine4';
import Image from '../Image';
import './CardProducts.scss';

function CardProducts() {
	return (
		<div className="card-products">
			<FormLine1 />
			<div className="row">
				<div className="col-lg-2">
					<div className="img-products">
						<Image src="akldash" alt="products" />
					</div>
				</div>
				<div className="col-lg-10">
					<FormLine2 />
					<FormLine3 />
					<FormLine4 />
				</div>
			</div>
		</div>
	);
}

export default memo(CardProducts);
