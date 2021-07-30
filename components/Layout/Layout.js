import React from 'react';

import PropTypes from 'prop-types';

import Header from 'components/Header';
import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';

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
