import React from 'react';

import MenuIcon from 'components/MenuIcon';
import SearchIcon from 'components/SearchIcon';
import Logo from 'components/Logo';
import MainNav from 'components/MainNav';
import Account from 'components/Account';

function Nav() {
  function handleToggleMenu() {
    console.log('This is working...');
  }

  function handleToggleSearch() {
    console.log('This is working...');
  }

  return (
    <nav className={`flex items-center`}>
      <div className="flex-auto">
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
        <div className="flex justify-end lg:hidden">
          <SearchIcon toggleSearch={handleToggleSearch} />
        </div>
        <div className="hidden lg:block">
          <Account />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
