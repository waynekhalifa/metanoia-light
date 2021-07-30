import React from 'react';

import PropTypes from 'prop-types';

import Header from '../Header';
import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
