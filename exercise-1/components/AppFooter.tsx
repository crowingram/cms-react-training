import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/AppFooter.module.css';

const AppFooter = () => {
  return (
	<footer>
		<div className={styles.footer}>
			<div><Image src="/assets/logo.svg" width={65} height={100} alt="Comic Closet" /></div>
			<div>
				<span><Link href="#">Privacy Policy</Link></span>
				&nbsp;|&nbsp;
				<span><Link href="#">Terms of Service</Link></span>
			</div>
			<p>Copyright 2022 Comic Closet, LLC. All rights reserved.</p>
			<p>Data provided by <Link href="http://marvel.com" target="_blank">Marvel</Link>. &copy; 2014 Marvel</p>
		</div>
	</footer>
  )
}

export default AppFooter