import { useState, useEffect } from 'react';
import Head from 'next/head';
import Comic from '../components/Comic';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Favorite from '../components/Favorite';
import useMarvelApi from '../hooks/useMarvelApi';
import styles from '../styles/Home.module.css';
import Publication from '../types/Publication';

export default function Home() {
	const [buttonStatus, setButtonStatus] = useState(false);
	const [creatorStatus, setCreatorStatus] = useState(0);
	const [characterStatus, setCharacterStatus] = useState(0);
	const [page, setPage] = useState(1);

	const comicsPerPage = 20;
	let query = '';
	let offsetValue = page * comicsPerPage;
	if (offsetValue > 0) {
		query += "offset=" + offsetValue + "&";
	}

	const comics: any = useMarvelApi('comics', query);
	const comicSubset: object[] = comics.data?.results;
	
	const handleCreatorSelect = (creator: string) => {
		const crtr = parseInt(creator);
		if ( crtr > 0 ) {
			setCreatorStatus(crtr);
			console.log("creator:", crtr);
			console.log("creator:", creatorStatus);
		}
	}

	const handleCharacterSelect = (character: string) => {
		const char = parseInt(character);
		if( char > 0 ) {
			setCharacterStatus(char);
			console.log("character:", char);
			console.log("character:", characterStatus);
		}
	}

	const handleClick = () => {
		setButtonStatus(!buttonStatus);
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

				<AppHeader />
				
				<main className={styles.main}>

					<div className={styles.displayArea}>
						<div className={styles.dropdowns}>
							<span>Filter by:</span>
							<form>
								<select 
									name="creators" 
									id="creators" 
									onChange={e => handleCreatorSelect(e.target.value)}
								>
									<option value="0">Creators</option>
									<option value="12787">Kate Leth</option>
									<option value="24">Brian Michael Bendis</option>
									<option value="30">Stan Lee</option>
									<option value="32">Steve Ditko</option>
									<option value="196">Jack Kirby</option>
								</select>
							</form>
							<form>
								<select 
									name="characters" 
									id="characters" 
									onChange={e => handleCharacterSelect(e.target.value)}
								>
									<option value="0">Characters</option>
									<option value="1009368">Iron Man</option>
									<option value="1009220">Captain America</option>
									<option value="1009664">Thor</option>
									<option value="1009268">Deadpool</option>
									<option value="1009562">Scarlet Witch</option>
									<option value="1009189">Black Widow</option>
									<option value="1010763">Gamora</option>
									<option value="1009707">Wasp</option>
								</select>
							</form>
						</div>

						<div className={styles.grid}>
							{comicSubset && comics.data.results.map((comic: Publication) => {
								return <Comic key={comic.id} comic={comic} handleClick={handleClick} />
							})}
						</div>
					</div>
					
					<div className={styles.favorites}>
						<h2>Favorites</h2>
						{comicSubset && comics.data.results.map((comic: Publication) => {
							if (comic.favorite) {
								return <Favorite key={comic.id} comic={comic} handleClick={handleClick} />
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
