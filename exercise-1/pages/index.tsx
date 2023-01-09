import { useState, useEffect } from 'react';
import Head from 'next/head';
import Comic from '../components/Comic';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Favorite from '../components/Favorite';
import Dropdowns from '../components/Dropdowns';
import useMarvelApi from '../hooks/useMarvelApi';
import styles from '../styles/Home.module.css';
import Publication from '../types/Publication';

export default function Home() {
	const [creator, setCreator] = useState(0);
	const [character, setCharacter] = useState(0);
	const [page, setPage] = useState(0);
	const [favorites, setFavorites] = useState([]);

	const comicsPerPage = 15;
	const querySettings = 'format=comic&formatType=comic&noVariants=true&limit=' + comicsPerPage;
	let query = '';
	if (creator > 0) {
		query += "creators=" + creator + "&";
	}
	if (character > 0) {
		query += "characters=" + character + "&";
	}
	let offsetValue = page * comicsPerPage;  // Pagination offset
	if (offsetValue > 0) {
		query += querySettings + "&offset=" + offsetValue + "&"; // End each query with an ampersand
	} else {
		query += querySettings + "&";
	}
	let comics: any = useMarvelApi('comics', query, page, character, creator, favorites);
	let comicSubset: object[] = comics.data?.results;
	let totalPages = Math.ceil(comics.data?.total / comicsPerPage);
	
	const handleCreatorSelect = (creator: string) => {
		const crtr = parseInt(creator);
		if ( crtr > 0 ) {
			setCreator(crtr);
			setPage(0);
			setCharacter(0);
		} else {
			setCreator(0);
			setPage(0);
		}
	}
	const handleCharacterSelect = (character: string) => {
		const char = parseInt(character);
		if ( char > 0 ) {
			setCharacter(char);
			setPage(0);
			setCreator(0);
		} else {
			setCharacter(0);
			setPage(0);
		}
	}
	const handleClick = ( id: number ) => {
		const favId = (element: number) => element === id;
		let favoriteIndex = favorites.findIndex(favId);
		
		if ( favoriteIndex === -1 ) {
			let workingFavorites: number[] = favorites;
			workingFavorites.push(id);
			setFavorites(workingFavorites);
		} else {
			let workingFavorites: number[] = favorites;
			workingFavorites.splice(favoriteIndex, 1);
			setFavorites(workingFavorites);
		}
	}

	const handlePageReverse = () => {
		if ( page > 0 ) {
			setPage(page - 1);
		}
	}
	const handlePageForward = () => {
		if ( page < totalPages-1 ) {
			setPage(page + 1);
		}
	}

	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>Final Project</title>
					<meta name="description" content="Generated by create next app" />
					<link type="image/x-icon" rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" />
				</Head>

				<AppHeader favorites={favorites} />
				
				<main className={styles.main}>

					<div className={styles.displayArea}>
						<Dropdowns 
							character={character}
							creator={creator}
							handleCharacterSelect={handleCharacterSelect} 
							handleCreatorSelect={handleCreatorSelect} 
						/>

						<div className={styles.grid}>
								{comicSubset && comics.data.results.map((comic: Publication) => {
										return <Comic key={comic.id} comic={comic} handleClick={handleClick} favorites={favorites} />
								})}
						</div>

						{!!totalPages && 
							<div className={styles.pagination}>
								<span onClick={handlePageReverse}>Back</span> 
								&mdash; Page {page + 1} of {totalPages} &mdash;
								<span onClick={handlePageForward}>Next</span>
							</div>
						}
					</div>

					<div className={styles.favorites}>
						<h2>Favorites</h2>
						{favorites[0] && favorites.map((favorite: number) => {
							if ( favorite > 0 ) {
								return <Favorite key={favorite} favoriteId={favorite} handleClick={handleClick} favorites={favorites} />
							} else {
								return
							}
						})}
					</div>
				</main>
					
				<AppFooter />
			</div>
		</>
	)
}
