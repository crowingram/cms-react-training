import Image from 'next/image'
import { Button } from './Button'
import { Detail } from './Detail'
import styles from '@/styles/Comic.module.css'


export const Comic = ({ comic }) => {
	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				<Image src={comic.thumbnail} width={150} height={231} alt={comic.title} />
				<Button key={comic.id} />
			</div>
			<h2 key={comic.id}>{comic.title}</h2>
			<Detail comic={comic} />
		</div>
	)
}
