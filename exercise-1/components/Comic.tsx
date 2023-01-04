import Image from 'next/image';
import Button from './Button';
import Detail from './Detail';
import styles from '@/styles/Comic.module.css';
import Publication from '../types/Publication';

const Comic = ({comic, handleClick, favorites}: {comic: Publication, handleClick: any, favorites: number[]} ) => {
	let thumbnailUrl: string = '';
	if(comic.thumbnail) {
		thumbnailUrl=comic.thumbnail.path + "." + comic.thumbnail.extension;
	}
	
	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				{comic.thumbnail 
					&& <Image src={thumbnailUrl} width={150} height={231} alt={comic.title} />}
				<Button comic={comic} handleClick={handleClick} favorites={favorites} />
			</div>
			<h2 key={comic.id}>{comic.title}</h2>
			<Detail comic={comic} />
		</div>
	);
}
export default Comic;