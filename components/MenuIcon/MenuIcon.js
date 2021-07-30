import React from 'react';

import PropTypes from 'prop-types';

import styles from './MenuIcon.module.css';

function MenuIcon({ toggleMenu }) {
  return (
    <div className={styles.menuIcon} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </div>
  );
}

MenuIcon.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default MenuIcon;
