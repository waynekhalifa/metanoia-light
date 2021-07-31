import React from 'react';

import MenuIcon from 'components/MenuIcon';
import Cart from 'components/Cart';
import SearchIcon from 'components/SearchIcon';
import Logo from 'components/Logo';
import MainNav from 'components/MainNav';
import Account from 'components/Account';

import styles from './Nav.module.css';

function Nav() {
  function handleToggleMenu() {
    console.log('This is working...');
  }

  function handleToggleSearch() {
    console.log('This is working...');
  }

  return (
    <nav className={`flex items-center`}>
      <div className={`${styles.branding} flex-auto`}>
        <div className="lg:hidden">
          <MenuIcon toggleMenu={handleToggleMenu} />
        </div>
        <div className="hidden lg:block">
          <Logo />
        </div>
      </div>
      <div className={`flex-auto`}>
        <div className="lg:hidden">
          <Logo />
        </div>
        <div className="hidden lg:block">
          <MainNav />
        </div>
      </div>
      <div className="flex-auto">
        <div className="flex justify-end ">
          <div className="hidden lg:flex lg:items-center">
            <Account />
          </div>
          <Cart />
          <SearchIcon toggleSearch={handleToggleSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
