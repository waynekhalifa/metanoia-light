import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import PropTypes from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Homebanner.module.css';

function HomeBanner({ slides }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    speed: 600,
    autoplay: true,
  };

  return (
    <div className={styles.banner}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Link key={slide.id} href={slide.slug}>
            <a className={styles.slide}>
              <Image
                className="block"
                src={slide.featuredImage.sourceUrl}
                alt={slide.featuredImage.altText}
              />
              <div className="absolute text-center z-10 inset-0">
                <div className="absolute bottom-8 sm:bottom-24 lg:bottom-32 w-full">
                  <div className="inline-block p-1 border border-solid border-pink-500">
                    <div className="px-8 py-4 sm:px-24 uppercase bg-pink-500 text-sm sm:text-lg sm:font-light">
                      SHop Now
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

HomeBanner.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default HomeBanner;
