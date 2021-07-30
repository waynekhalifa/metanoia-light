import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/metanoia.png';

import styles from './Logo.module.css';

function Logo() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <Image src={logo} alt="metanoia" />
      </a>
    </Link>
  );
}

export default Logo;
