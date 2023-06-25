import React from "react";
import Image from "next/image";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section section-divider white testi">
      <div className="container">
        <p className="section-subtitle">Testimonials</p>

        <h2 className="h2 section-title">
          Our Customers <span className="span">Reviews</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <ul className="testi-list has-scrollbar">
          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <Image
                    src="/images/avatar-1.jpg"
                    width={80}
                    height={80}
                    alt="Robert William"
                    loading="lazy"
                  />
                </figure>

                <div>
                  <h3 className="h4 testi-name">Robert William</h3>

                  <p className="testi-title">CEO Kingfisher</p>
                </div>
              </div>

              <blockquote className="testi-text">
                &quot;I would be lost without restaurant. I would like to
                personally thank you for your outstanding product.&quot;
              </blockquote>

              <div className="rating-wrapper">
                {/* <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon> */}
              </div>
            </div>
          </li>

          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <Image
                    src="/images/avatar-2.jpg"
                    width={80}
                    height={80}
                    alt="Thomas Josef"
                    loading="lazy"
                  />
                </figure>

                <div>
                  <h3 className="h4 testi-name">Thomas Josef</h3>

                  <p className="testi-title">CEO Getforce</p>
                </div>
              </div>

              <blockquote className="testi-text">
                &quot;I would be lost without restaurant. I would like to
                personally thank you for your outstanding product.&quot;
              </blockquote>

              <div className="rating-wrapper">
                {/* <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon> */}
              </div>
            </div>
          </li>

          <li className="testi-item">
            <div className="testi-card">
              <div className="profile-wrapper">
                <figure className="avatar">
                  <Image
                    src="/images/avatar-3.jpg"
                    width={80}
                    height={80}
                    alt="Charles Richard"
                    loading="lazy"
                  />
                </figure>

                <div>
                  <h3 className="h4 testi-name">Charles Richard</h3>

                  <p className="testi-title">CEO Angela</p>
                </div>
              </div>

              <blockquote className="testi-text">
                &quot;I would be lost without restaurant. I would like to
                personally thank you for your outstanding product.&quot;
              </blockquote>

              <div className="rating-wrapper">
                {/* <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
