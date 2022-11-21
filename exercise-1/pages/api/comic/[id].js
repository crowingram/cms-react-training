import Head from 'next/head'
import styles from '../../../styles/Comic.module.css'

const { comics } = require('./static_data.json') 

export default function Home( comics ) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Detail 
				</h1>

				
						<h3>Creators</h3>
						{comic.creators.map((creator, index) => {
							{console.log(creator.name+", "+creator.role+": ("+index+")")}
							<p key={index}>{creator.name}, {creator.role}</p>
						})}
				
			</main>

			<footer className={styles.footer}>				
					Copyright 2022, Matthew Waldrop, All Rights Reserved
			</footer>
		</div>
	)
}

export function handler (req, res) {
	const { id } = req.query
	const comic = comics.find((comic) => comic.id === parseInt(id))

	if(req.method === 'GET') {
		res.status(200).json(comic)
	} else {
		res.setHeader('Allow', ['GET'])
		res.status(405).json({message: `Method ${req.method} is not allowed.`})
	}
}