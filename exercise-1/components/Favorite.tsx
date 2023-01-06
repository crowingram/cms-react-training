import React from 'react';
import Image from 'next/image';
import styles from '../styles/Favorite.module.css';
import Publication from '../types/Publication';

const Favorite = ({ comic, handleClick, favorites }: {comic: Publication, handleClick: any, favorites: number[]}) => {
	let thumbnailUrl: string = '';
	if(comic.thumbnail) {
		thumbnailUrl=comic.thumbnail.path + "." + comic.thumbnail.extension;
	}
	
	if ( favorites.includes(comic.id) ) {
		console.log(comic.id, 'Favorite')
	} else {
		console.log(comic.id, 'black')
	}

	const handleUpdate = () => {
		handleClick(comic.id);
	}

	return (
		<div className={styles.favorites}>
			<div className={styles.thumbnail} onClick={handleUpdate}><Image src={thumbnailUrl} width={40} height={62} alt={comic.title} /></div>
			<p onClick={handleUpdate}>{comic.title}</p> 
		</div>
	)
}

export default Favorite