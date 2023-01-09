import styles from '@/styles/Button.module.css';
import { FaBolt } from 'react-icons/fa';
import Publication from '../types/Publication';

function Button( {comic, handleClick, favorites}: {comic: Publication, handleClick: any, favorites: number[]} ) {
	const handleUpdate = () => {
		if (favorites.length < 10 && !favorites.includes(comic.id)) {
			handleClick(comic.id);
		} else if (favorites.includes(comic.id)) {
			handleClick(comic.id);
		}
	}

	return (
		<>
			{ favorites.includes(comic.id) && 
				<div className={styles.boltFavorite} onClick={handleUpdate}><span><FaBolt /></span></div> 
			}
			{ !favorites.includes(comic.id) && 
				<div className={styles.bolt} onClick={handleUpdate}><span><FaBolt /></span></div> 
			}
		</>
	);
}

export default Button;