import styles from '@/styles/Button.module.css';
import { FaBolt } from 'react-icons/fa';
import Publication from '../types/Publication';

function Button( {comic, handleClick, favorites}: {comic: Publication, handleClick: any, favorites: number[]} ) {
	const handleUpdate = () => {
		handleClick(comic.id);
	}

	//check favorites array to determine whether bolt is on or off - map
	// if favorites.includes(comic.id) 
	//   bolt is red
	// else
	//   bolt is black 

	
	const favId = (element: number) => element === comic.id;
	let favoriteIndex = favorites.findIndex(favId);
	if ( favoriteIndex === -1) {
		console.log(`${comic.id} black - per favoriteIndex`);
	} else {
		console.log(`${comic.id} red`);
	}

	if ( favorites.includes(comic.id) ) { 
		console.log(comic.id, 'Favorite')
	} else {
		console.log(comic.id, 'black - per favorites')
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