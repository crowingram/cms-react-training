import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/AppHeader.module.css';

const AppHeader = ({favorites}: {favorites: number[]}) => {
  return (
	<>
		<header className={styles.title}>
			<div className={styles.titleContainer}>
				<div className={styles.navBar}>
					<Image src="/assets/logo.svg" width={150} height={231} alt="Comic Closet" />
					<div className={styles.navigation}>
						<div><Link href="/">Home</Link></div>
						<div><Link href="/">Shop</Link></div>
						<div>
							Favorites
							{ favorites.length > 0 && <span>&ensp;({favorites.length})</span>}
						</div>
					</div>
				</div>
				<h1>Comic Closet</h1>
				<Image src="/assets/halftone.png" width={1000} height={150} alt="" />
			</div>
		</header>
	</>
  )
}

export default AppHeader