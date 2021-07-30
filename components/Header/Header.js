import React from 'react';

import PropTypes from 'prop-types';

import styles from './Header.module.css';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className="container max-w-screen-lg mx-auto px-4">{children}</div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
