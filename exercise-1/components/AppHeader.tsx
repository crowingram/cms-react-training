import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaBolt } from 'react-icons/fa';
import styles from '../styles/AppHeader.module.css';

const AppHeader = ({favorites}: {favorites: number[]}) => {
  return (
	<>
		<header className={styles.title}>
			<div className={styles.titleContainer}>
				<div className={styles.navBar}>
					<Image src="/assets/logo.svg" width={80} height={123} alt="Comic Closet" />
					<div className={styles.navigation}>
						<div><Link href="/">Home</Link></div>
						<div><Link href="/">Shop</Link></div>
						<div>
							<FaBolt /> Favorites
							{ favorites.length > 0 && <span>&ensp;({favorites.length})</span>}
						</div>
					</div>
				</div>
				<h1>Comic Closet</h1>
			</div>
		</header>
	</>
  )
}

export default AppHeader