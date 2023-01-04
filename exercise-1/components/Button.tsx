import styles from '@/styles/Button.module.css';
import { FaBolt } from 'react-icons/fa';
import Publication from '../types/Publication';

function Button( {comic, handleClick, favorites}: {comic: Publication, handleClick: any, favorites: number[]} ) {
	const handleUpdate = () => {
		comic.favorite = !comic.favorite;
		handleClick(comic.id);
	}

	//check favorites array to determine whether bolt is on or off - map
	// if favorites.includes(comic.id) 
	//   bolt is red
	// else
	//   bolt is black

	if ( favorites.includes(comic.id) ) {
		console.log(comic.id, 'Favorite')
	} else {
		console.log(comic.id, 'black')
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