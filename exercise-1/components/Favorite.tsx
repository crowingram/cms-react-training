import React from 'react'
import styles from '../styles/Favorite.module.css';
import Publication from '../types/Publication';

const Favorite = ({ comic }: {comic: Publication}) => {
  return (
	<>
		<p>{comic.title}</p>
	</>
  )
}

export default Favorite