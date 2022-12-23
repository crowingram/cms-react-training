import styles from '@/styles/Button.module.css';
import { FaBolt } from 'react-icons/fa';
import Publication from '../types/Publication';

function Button( {comic, handleClick}: {comic: Publication, handleClick: any} ) {
	const handleUpdate = () => {
		comic.favorite = !comic.favorite;
		handleClick();
	}

	return (
		<>
			{ comic.favorite && 
				<div className={styles.boltFavorite} onClick={handleUpdate}><span><FaBolt /></span></div> 
			}
			{ !comic.favorite && 
				<div className={styles.bolt} onClick={handleUpdate}><span><FaBolt /></span></div> 
			}
		</>
	);
}

export default Button;