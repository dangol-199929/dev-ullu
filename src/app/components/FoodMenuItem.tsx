import Image from "next/image";
import React from "react";

const FoodMenuItem = () => {
  return (
    <div>
      <li>
        <div className="food-menu-card">
          <div className="card-banner">
            <Image
              src="/images/food-menu-1.png"
              width="300"
              height="300"
              loading="lazy"
              alt="Fried Chicken Unlimited"
              className="w-100"
            />

            <div className="badge">-15%</div>

            <button className="btn food-menu-btn">Order Now</button>
          </div>

          <div className="wrapper">
            <p className="category">Chicken</p>

            <div className="rating-wrapper">
              {/* <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon> */}
            </div>
          </div>

          <h3 className="h3 card-title">Fried Chicken Unlimited</h3>

          <div className="price-wrapper">
            <p className="price-text">Price:</p>

            <data className="price">$49.00</data>

            <del className="del">$69.00</del>
          </div>
        </div>
      </li>
    </div>
  );
};

export default FoodMenuItem;
