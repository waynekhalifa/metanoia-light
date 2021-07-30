import React from 'react';

import PropTypes from 'prop-types';

import styles from './SearchIcon.module.css';

function SearchIcon({ toggleSearch }) {
  return (
    <div className={styles.searchIcon} onClick={toggleSearch}>
      <div className={styles.circle} />
      <div className={styles.rectangle} />
    </div>
  );
}

SearchIcon.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
};

export default SearchIcon;
