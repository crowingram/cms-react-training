import React from 'react';
import Image from 'next/image';
import styles from '../styles/Favorite.module.css';
import Publication from '../types/Publication';
import { FaCompactDisc } from 'react-icons/fa';

const Favorite = ({ comic, handleClick }: {comic: Publication, handleClick: any}) => {
	let thumbnailUrl: string = '';
	if(comic.thumbnail) {
		thumbnailUrl=comic.thumbnail.path + "." + comic.thumbnail.extension;
	}
	
	return (
		<div className={styles.favorites}>
			<div key={comic.id} className={styles.thumbnail} onClick={handleClick}><Image src={thumbnailUrl} width={40} height={62} alt={comic.title} /></div>
			<p key={comic.id} onClick={handleClick}>{comic.title}</p>
		</div>
	)
}

export default Favorite