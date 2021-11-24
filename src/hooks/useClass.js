export const useClass = (props, style) => {
	//=====< Create array for style >=====
	let styleProps = [];

	//=====< Add style >=====
	for (let i in props) {
		styleProps.push(i);
	}

	//=====< Convert style to className >=====
	const convert = styleProps.map(item => ({ [style[item]]: true }));

	//=====< Return array >=====
	return convert;
};
