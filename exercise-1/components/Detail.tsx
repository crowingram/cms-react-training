import moment from 'moment';
import Link from 'next/link';
import styles from '@/styles/Detail.module.css';
import Publication from '../types/Publication';

const API_PUBLIC = process.env.PUBLIC_API_KEY;

function Detail( {comic}: {comic: Publication} ) {
	let creatorUrl = '';

	return (
		<div className={styles.detail}>
			{ comic.issueNumber > 0 && <p><b>Issue:</b> {comic.issueNumber}</p> }

			{ <p><b>Published:</b> { moment(comic.publishDate).format('LL') }</p>}

			{ comic.creators && comic.creators.available === 1 && <p><b>Creator:</b></p> }
			{ comic.creators && comic.creators.available > 1 && <p><b>Creators:</b></p> }
			{ comic.creators && comic.creators.items.map((creator: { resourceURI: string; name: string | number | boolean; role: string }) => {
				let index = Math.random();
				creatorUrl = creator.resourceURI + "?apikey=" + API_PUBLIC;
				return <p key={index}><Link href={creatorUrl}>{creator.name}</Link>, {creator.role}</p>;
			})}
		</div>
	)
}

export default Detail;