import moment from 'moment';
import Link from 'next/link';
import styles from '@/styles/Detail.module.css'
const API_PUBLIC = process.env.PUBLIC_API_KEY

export function Detail({ comic }) {
	let creatorUrl = ''

	return (
		<div className={styles.detail}>
			{ comic.issueNumber > 0 && <p><b>Issue:</b> {comic.issueNumber}</p> }
			<p><b>Published:</b> { moment(comic.publishDate).format('LL') }</p>
			{ comic.creators && <p><b>Creators:</b></p>}
			{ comic.creators && comic.creators.items.map((creator) => {
				let index = Math.random()
				creatorUrl = creator.resourceURI + "?apikey=" + API_PUBLIC
				return <p key={index}><Link href={creatorUrl}>{creator.name}</Link>, {creator.role}</p>
			})}
			
		</div>
	)
}
