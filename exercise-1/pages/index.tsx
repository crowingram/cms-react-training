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

	const comics: any = useMarvelApi('comics', '');
	const comicSubset: object[] = comics.data?.results;

	const [buttonStatus, setButtonStatus] = useState(false);

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
								<label htmlFor="creators">Creators</label>
								<select name="creators" id="creators">
									<option value="12787">Kate Leth</option>
								</select>
							</form>
							<form>
								<label htmlFor="characters">Characters</label>
								<select name="characters" id="characters">
									<option value="1009368">Iron Man</option>
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
								return <Favorite key={comic.id} comic={comic} />
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
