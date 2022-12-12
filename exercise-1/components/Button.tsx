import { useState } from 'react';
import styles from '@/styles/Button.module.css';
import { FaBolt } from 'react-icons/fa';

export function Button() {
	const [buttonStatus, setButtonStatus] = useState(false);

	const buttonToggle = () => {
		setButtonStatus(!buttonStatus);
	}
	return (
		<div className={styles.bolt} onClick={buttonToggle}>
			<span>
				<FaBolt />
			</span>
		</div>
	);
}
