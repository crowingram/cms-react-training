import React from 'react'
import Link from 'next/link';

import styles from '../styles/AppFooter.module.css';

const AppFooter = () => {
  return (
	<footer>
		<div className={styles.footer}>
			<p>Data provided by <Link href="http://marvel.com" target="_blank">Marvel</Link>. &copy; 2014 Marvel</p>
		</div>
	</footer>
  )
}

export default AppFooter