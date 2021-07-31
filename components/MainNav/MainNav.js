import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

function MainNav({ items }) {
  return (
    <ul className="lg:flex lg:justify-center">
      {items.map((item) => (
        <li key={item.id} className="lg:mx-4">
          <Link href={item.slug}>
            <a className="lg:text-sm lg:uppercase lg:tracking-wide">
              {item.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MainNav.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MainNav;
