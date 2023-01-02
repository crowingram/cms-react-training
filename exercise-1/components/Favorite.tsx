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
		<div className={styles.favorites} onClick={handleClick}>
			<div><Image src={thumbnailUrl} width={40} height={62} alt={comic.title} /></div>
			<p>{comic.title}</p>
		</div>
	)
}

export default Favorite