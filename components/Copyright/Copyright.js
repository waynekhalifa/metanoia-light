import React from 'react';

function Copyright() {
  function currentYear() {
    return new Date().getFullYear();
  }
  return (
    <p className="font-extralight text-center border-t border-light-gray-100 border-opacity-75 py-4">
      <span className="block sm:inline-block sm:mx-1">
        Copyright {currentYear()} Metanoia Fashion Designing L.L.C.
      </span>
      <span className="block sm:inline-block sm:mx-1">
        All rights reserved.
      </span>
    </p>
  );
}

export default Copyright;
