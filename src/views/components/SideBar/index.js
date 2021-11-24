import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';

function SideBar() {
	return (
		<section className={styles.main}>
			<ul className={styles.sideBar}>
				<li className={styles.item}>
					<NavLink to="/">注文一覧</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/products">商品一覧</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/page-pack">PACK一覧</NavLink>
				</li>
			</ul>
		</section>
	);
}

export default SideBar;
