import { useState } from 'react';
import styles from '@/styles/Button.module.css';
import { FaBolt } from 'react-icons/fa';

function Button( {favorite}: boolean ) {
	const [buttonStatus, setButtonStatus] = useState(favorite);

	const buttonToggle = () => {
		setButtonStatus(!buttonStatus);
	}

	return (
		<>
			{ buttonStatus && 
				<div className={styles.boltFavorite} onClick={buttonToggle}><span><FaBolt /></span></div> 
			}
			{ !buttonStatus && 
				<div className={styles.bolt} onClick={buttonToggle}><span><FaBolt /></span></div> 
			}
		</>
	);
}

export default Button;