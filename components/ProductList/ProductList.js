import React from 'react';

import PropTypes from 'prop-types';

import ProductCard from 'components/ProductCard';

import styles from './ProductList.module.css';

function ProductList({ categories, sortby, price }) {
  return (
    <div className="pt-24 container max-w-screen-lg mx-auto px-4">
      <div className="grid grid-cols-3 gap-4 mb-16">
        <div className={`${styles.categories} col-span-2`}>
          <ul className="flex items-center">
            {categories.map((item) => (
              <li key={item.id} className="mr-4">
                <span className="block cursor-pointer uppercase text-sm tracking-wider font-extrathin">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative text-right">
          <div className="mkd-pl-ordering-outer">
            <h6
              className={`${styles.filter} cursor-pointer uppercase text-sm tracking-wider font-extrathin`}
            >
              Filter
            </h6>
            <div
              className={`${styles.ordering} grid grid-cols-2 gap-4 absolute right-0 mt-8`}
            >
              <div>
                <h5 className="mb-4 uppercase tracking-wider">Sort By</h5>
                <ul>
                  {sortby.map((item) => (
                    <li key={item.id} className="py-1">
                      <span className="font-thin" data-ordering={item.order}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-4 uppercase tracking-wider">Price Range</h5>
                <ul className="mkd-pl-ordering-price">
                  {price.map((item) => (
                    <li key={item.id} className="py-1">
                      <span
                        data-minprice={item.minprice}
                        data-maxprice={item.maxprice}
                        className="font-thin"
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

ProductList.propTypes = {
  categories: PropTypes.array.isRequired,
  sortby: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
};

export default ProductList;
