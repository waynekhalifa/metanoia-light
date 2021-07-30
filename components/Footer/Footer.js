import React from 'react';

import FooterMenu from '../FooterMenu';
import Copyright from '../Copyright';

import {
  customerService,
  company,
  socialMedia,
  profile,
} from '../../styles/data/footer-menus';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} py-12 md:py-18 lg:py-24`}>
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <FooterMenu title="Customer Service" items={customerService} />
          <FooterMenu title="Company" items={company} />
          <FooterMenu title="Social Media" items={socialMedia} />
          <FooterMenu title="Profile" items={profile} />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
