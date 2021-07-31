import React from 'react';
import Link from 'next/link';

function Account() {
  return (
    <Link href="/account">
      <a className="tracking-wide mr-4 uppercase text-sm">account</a>
    </Link>
  );
}

export default Account;
