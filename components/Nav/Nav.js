import React from 'react';

import Logo from 'components/Logo';
import MainNav from 'components/MainNav';
import Account from 'components/Account';

import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={`${styles.nav} flex items-center`}>
      <div className="flex-auto">
        <div className="lg:hidden">icon...</div>
        <div className="hidden lg:block">
          <Logo />
        </div>
      </div>
      <div className={` flex-auto`}>
        <div className="lg:hidden">
          <Logo />
        </div>
        <div className="hidden lg:block">
          <MainNav />
        </div>
      </div>
      <div className="flex-auto">
        <div className="flex justify-end lg:hidden">icon...</div>
        <div className="hidden lg:block">
          <Account />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
