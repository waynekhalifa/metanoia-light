import React from 'react';
import Link from 'next/link';

function Cart() {
  return (
    <Link href="/cart">
      <a className="flex items-center text-sm mr-2">
        <span className="uppercase mr-1">Bag</span>
        <span className="grey">($0)</span>
      </a>
    </Link>
  );
}

export default Cart;
