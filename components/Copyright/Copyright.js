import React from 'react';

function Copyright() {
  function currentYear() {
    return new Date().getFullYear();
  }
  return (
    <p className="font-extralight text-center mt-12 md:mt-18 lg:mt-24">
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
