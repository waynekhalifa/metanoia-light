import React from 'react';

import Logo from '../Logo';
import MainNav from '../MainNav';
import Account from '../Account';

import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className="flex">
      <div className="flex-auto">
        <Logo />
      </div>
      <div className={`${styles.mainNav} flex-auto`}>
        <MainNav />
      </div>
      <div className="flex-auto">
        <Account />
      </div>
    </nav>
  );
}

export default Nav;
