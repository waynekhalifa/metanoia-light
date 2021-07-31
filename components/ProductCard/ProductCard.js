import React from 'react';

function ProductCard() {
  return (
    <div className="relative mb-12">
      <div className="mkd-pli-inner">
        <div className="mkd-pli-image">
          <span className="font-extralight absolute inline-block top-4 left-6 text-sm tracking-wide text-center z-100">
            NEW
          </span>
          <img
            width={600}
            height={728}
            src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg"
            className="attachment-shop_catalog size-shop_catalog wp-post-image"
            alt="a"
            loading="lazy"
          />
        </div>
        <div className="mkd-pli-text">
          <div className="mkd-pli-text-outer">
            <div className="mkd-pli-text-inner hidden">
              <div className="mkd-yith-wcqv-holder">
                <a href="#" className="yith-wcqv-button" data-product_id={27}>
                  <span>QUICK LOOK</span>
                </a>
              </div>
              <div className="yith-wcwl-add-to-wishlist add-to-wishlist-27">
                <div
                  className="yith-wcwl-add-button show"
                  style={{ display: 'block' }}
                >
                  <a
                    href="/wp-admin/admin-ajax.php?add_to_wishlist=27"
                    rel="nofollow"
                    data-product-id={27}
                    data-product-type="simple"
                    className="add_to_wishlist"
                  >
                    Add to Wishlist
                  </a>
                  <img
                    src="https://depot.qodeinteractive.com/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif"
                    className="ajax-loading"
                    alt="loading"
                    width={16}
                    height={16}
                    style={{ visibility: 'hidden' }}
                  />
                </div>
                <div
                  className="yith-wcwl-wishlistaddedbrowse hide"
                  style={{ display: 'none' }}
                >
                  <span className="feedback">Product added!</span>
                  <a
                    href="https://depot.qodeinteractive.com/wishlist/"
                    rel="nofollow"
                  >
                    Browse Wishlist
                  </a>
                </div>
                <div
                  className="yith-wcwl-wishlistexistsbrowse hide"
                  style={{ display: 'none' }}
                >
                  <span className="feedback">
                    The product is already in the wishlist!
                  </span>
                  <a
                    href="https://depot.qodeinteractive.com/wishlist/"
                    rel="nofollow"
                  >
                    Browse Wishlist
                  </a>
                </div>
                <div style={{ clear: 'both' }} />
                <div className="yith-wcwl-wishlistaddresponse" />
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <a
          className="mkd-pli-link"
          itemProp="url"
          href="https://depot.qodeinteractive.com/product/basket-with-handles/"
          title="Basket With Handles"
        />
      </div>
      <div className="mkd-pli-text-wrapper mt-6 bm-4 text-center text-sm tracking-wide">
        <h5 itemProp="name" className="entry-title mkd-pli-title uppercase">
          <a
            itemProp="url"
            href="https://depot.qodeinteractive.com/product/basket-with-handles/"
          >
            Basket With Handles
          </a>
        </h5>
        <div className="mkd-pli-price mt-1 font-thin">
          <span className="woocommerce-Price-amount amount">
            <span className="woocommerce-Price-currencySymbol">$</span>160
          </span>
        </div>
        <div className="mkd-pli-add-to-cart hidden">
          <a
            rel="nofollow"
            href="/wp-admin/admin-ajax.php?add-to-cart=27"
            data-quantity={1}
            data-product_id={27}
            data-product_sku={8}
            className="add_to_cart_button ajax_add_to_cart mkd-button"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
