import React from 'react';
import Image from 'next/image';
import styles from '../styles/Favorite.module.css';
import Publication from '../types/Publication';

const Favorite = ({ comic, handleClick }: {comic: Publication, handleClick: any}) => {
	let thumbnailUrl: string = '';
	if(comic.thumbnail) {
		thumbnailUrl=comic.thumbnail.path + "." + comic.thumbnail.extension;
	}
	
	return (
		<div className={styles.favorites}>
			<div className={styles.thumbnail} onClick={handleClick}><Image src={thumbnailUrl} width={40} height={62} alt={comic.title} /></div>
			<button onClick={handleClick}>{comic.title}</button>
		</div>
	)
}

export default Favorite