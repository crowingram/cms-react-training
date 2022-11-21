import moment from 'moment';
import Link from 'next/link';
import styles from '@/styles/Detail.module.css'

export function Detail({ comic }) {

	return (
		<div className={styles.detail}>
			{ comic.issueNumber > 0 && <p><b>Issue:</b> {comic.issueNumber}</p> }
			<p><b>Published:</b> { moment(comic.publishDate).format('LL') }</p>
			<p><b>Creators:</b></p>
			{ comic.creators.map((creator, index) => {
				return <p key={index}><Link href={creator.resourceURI}>{creator.name}</Link>, {creator.role}</p>
			})}
			
		</div>
	)
}
