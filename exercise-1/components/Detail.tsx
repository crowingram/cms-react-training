import moment from 'moment';
import styles from '@/styles/Detail.module.css';
import Publication from '../types/Publication';

function Detail( {comic}: {comic: Publication} ) {

	return (
		<div className={styles.detail}>
			{ comic.issueNumber > 0 && <p><b>Issue:</b> {comic.issueNumber}</p> }

			{ <p><b>Published:</b> { moment(comic.dates[0].date).format('LL') }</p>}

			{ comic.creators && comic.creators.available === 1 && <p><b>Creator:</b></p> }
			{ comic.creators && comic.creators.available > 1 && <p><b>Creators:</b></p> }
			{ comic.creators && comic.creators.items.map((creator: { resourceURI: string; name: string | number | boolean; role: string }) => {
				let index = Math.random();
				return <p key={index}>{creator.name}, {creator.role}</p>;
			})}
		</div>
	)
}

export default Detail;