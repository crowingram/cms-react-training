import styles from '@/styles/Button.module.css';
import { FaBolt, FaCompactDisc } from 'react-icons/fa';
import Publication from '../types/Publication';

function Button( {comic, handleClick, favorites}: {comic: Publication, handleClick: any, favorites: number[]} ) {
	const handleUpdate = () => {
		if (favorites.length < 10 && !favorites.includes(comic.id)) {
			handleClick(comic.id);
		} else if (favorites.includes(comic.id)) {
			handleClick(comic.id);
		}
	}

	//check favorites array to determine whether bolt is on or off - map
	// if favorites.includes(comic.id) 
	//   bolt is red
	// else
	//   bolt is black 

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