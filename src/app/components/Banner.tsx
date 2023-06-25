import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Eat Sleep And</p>

          <h2 className="h1 hero-title">Supper delicious Burger in town!</h2>

          <p className="hero-text">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>

          <button className="btn">Book A Table</button>
        </div>

        <figure className="hero-banner">
          <Image
            src="/images/hero-banner-bg.png"
            width="820"
            height="716"
            alt=""
            aria-hidden="true"
            className="w-100 hero-img-bg"
          />

          <Image
            src="/images/hero-banner.png"
            width="700"
            height="637"
            loading="lazy"
            alt="Burger"
            className="w-100 hero-img"
          />
          {/* <Image src={"/hero-banner-bg.png"} alt="Banner" fill /> */}
        </figure>
      </div>
    </section>
  );
};

export default Banner;
