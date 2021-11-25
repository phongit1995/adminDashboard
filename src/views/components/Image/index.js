import { memo } from 'react';
import clsx from 'clsx';

import PlaceHolderUser from '../../../assets/images/placeHolder/placeholder-image.png';
import style from './Image.module.scss';

function Image({ className, src, alt, ...props }) {
	return (
		<div className={clsx(style.img, className)}>
			<img
				onError={e => {
					e.target.onerror = null;
					e.target.src = PlaceHolderUser;
				}}
				src={src}
				alt={alt}
				{...props}
			/>
		</div>
	);
}

export default memo(Image);
