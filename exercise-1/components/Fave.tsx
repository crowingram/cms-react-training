import React from 'react'
import Image from 'next/image';
import styles from '../styles/Fave.module.css';
import useMarvelApi from '../hooks/useMarvelApi';

const Fave = ({favoriteId, handleClick, favorites}: {favoriteId: number, handleClick: any, favorites: number[]}) => {

	let verb = '';
	let query = '';

	verb += 'comics/' + favoriteId;
	
	console.log(verb);
	let favComic: any = useMarvelApi(verb, query,0,0,0,favorites);

	
	let thumbnailUrl: string = '';
	if(favComic.thumbnail) {
		thumbnailUrl=favComic.thumbnail.path + "." + favComic.thumbnail.extension;
		console.log(thumbnailUrl)
	}

	const handleUpdate = () => {
		handleClick(favoriteId);
	}

	return (
		<div className={styles.favorites}>
			<div className={styles.thumbnail} onClick={handleUpdate}><Image src={thumbnailUrl} width={40} height={62} alt={favComic.title} /></div>
			<p onClick={handleUpdate}>{favComic.title}</p> 
		</div>
  )
}

export default Fave