import { memo } from 'react';

import CardProducts from '../CardProducts';

function ListProduct({ list }) {
	return (
		<div>
			{console.log(list)}
			{list.map(product => (
				<CardProducts key={product._id} product={product} />
			))}
		</div>
	);
}

export default memo(ListProduct);
