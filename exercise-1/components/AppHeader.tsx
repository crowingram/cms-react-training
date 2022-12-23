import React from 'react'
import Image from 'next/image';
import styles from '../styles/AppHeader.module.css';

const AppHeader = () => {
  return (
	<header className={styles.title}>
		<Image src="/assets/logo.svg" width={150} height={231} alt="Comic Closet" />
		<h1>Comic Closet</h1>
	</header>
  )
}

export default AppHeader