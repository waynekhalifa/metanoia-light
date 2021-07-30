import React from 'react';

import Link from 'next/link';

import PropTypes from 'prop-types';

import styles from './FooterMenu.module.css';

function FooterMenu({ title, items }) {
  return (
    <div className={`${styles.menu} mt-8`}>
      <h4 className="text-base mb-8 uppercase tracking-wider">{title}</h4>
      <ul className="menu">
        {items.map((item) => (
          <li key={item.id} className={`${styles.menuItem} mb-3`}>
            <Link href={item.slug}>
              <a className="text-sm font-light">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default FooterMenu;
