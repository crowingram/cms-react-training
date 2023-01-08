import React from 'react'
import Image from 'next/image';
import styles from '../styles/Fave.module.css';
import useMarvelApi from '../hooks/useMarvelApi';

const Fave = ({favoriteId, handleClick, favorites}: {favoriteId: number, handleClick: any, favorites: number[]}) => {

	let verb = '';
	let query = '';

	verb += 'comics/' + favoriteId;
	
	console.log('verb=', verb);
	let favComic: any = useMarvelApi(verb, query,0,0,0,favorites);
	console.log('favComic=', favComic);
	
	let thumbnailUrl: string = '';
	if(favComic.data?.results[0].thumbnail) {
		thumbnailUrl=favComic.data.results[0].thumbnail.path + "." + favComic.data.results[0].thumbnail.extension;
	}
		console.log('thumbnailUrl=', thumbnailUrl)

	const handleUpdate = () => {
		handleClick(favoriteId);
	}

	return (
		<>
			<div className={styles.favorites}>
				{favComic && 
					<div className={styles.thumbnail} onClick={handleUpdate}><Image src={thumbnailUrl} width={40} height={62} alt={favComic.data?.results[0].title} /></div>
				}
				<p onClick={handleUpdate}>{favComic.data?.results[0].title}</p> 
			</div>
		</>
  )
}

export default Fave