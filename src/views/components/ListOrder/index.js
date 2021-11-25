import { memo } from 'react';

import CardProducts from '../CardProducts';
import CardProducts2 from '../CardProducts2';

function ListOrder() {
	return (
		<div>
			<CardProducts />
			<CardProducts2 />
		</div>
	);
}

export default memo(ListOrder);
