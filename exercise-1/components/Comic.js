import Image from 'next/image'
import { Button } from './Button'
import { Detail } from './Detail'
import styles from '@/styles/Comic.module.css'


export const Comic = ({ comic }) => {
	let thumbnailUrl = ''
	
	if(comic.thumbnail) {
		thumbnailUrl=comic.thumbnail.path + "." + comic.thumbnail.extension
	}
	
	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				{comic.thumbnail 
					&& comic.thumbnail.path !== "image_not_available " 
					&& console.log(comic.thumbnail.path + "." + comic.thumbnail.extension)}
				{comic.thumbnail 
					&& <Image src={thumbnailUrl} width={150} height={231} alt={comic.title} />}
				<Button key={comic.id} />
			</div>
			<h2 key={comic.id}>{comic.title}</h2>
			<Detail comic={comic} />
		</div>
	)
}
