import React from 'react';
import { Link } from 'react-router-dom';
import bannerContent from '../data/bannerContent.json';

const Banner = () => {
  const { title, subtitle, description, cta } = bannerContent;
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        {cta && (
          <Link
            to={cta.link}
          >
            {cta.text}
          </Link>
        )}
      </div>
    </section>
  );
};
export default Banner;