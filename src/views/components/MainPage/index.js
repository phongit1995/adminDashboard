import { memo } from 'react';

import styles from './MainPage.module.scss';

function MainPage({ children }) {
	return <main className={styles.main}>{children}</main>;
}

export default memo(MainPage);
