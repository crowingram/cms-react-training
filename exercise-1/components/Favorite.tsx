import React from 'react'
import Image from 'next/image';
import styles from '../styles/Favorite.module.css';
import useMarvelApi from '../hooks/useMarvelApi';

const Favorite = ({favoriteId, handleClick, favorites}: {favoriteId: number, handleClick: any, favorites: number[]}) => {

	let verb = '';
	let query = '';

	verb += 'comics/' + favoriteId;
	
	let favComic: any = useMarvelApi(verb, query,0,0,0,favorites);
	
	let thumbnailUrl: string = '';
	if(favComic.data?.results[0].thumbnail.path) {
		thumbnailUrl=favComic.data.results[0].thumbnail.path + "." + favComic.data.results[0].thumbnail.extension;
	}

	const handleUpdate = () => {
		handleClick(favoriteId);
	}

	return (
		<>
			<div className={styles.favorites}>
				{thumbnailUrl && 
					<div className={styles.thumbnail} onClick={handleUpdate}><Image src={thumbnailUrl} width={40} height={62} alt={favComic.data?.results[0].title} /></div>
				}
				{thumbnailUrl && 
					<p onClick={handleUpdate}>{favComic.data?.results[0].title}</p> 
				}
			</div>
		</>
  )
}

export default Favorite