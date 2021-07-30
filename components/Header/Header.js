import React from 'react';

import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header>
      <div className="container max-w-screen-lg mx-auto px-4">{children}</div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
