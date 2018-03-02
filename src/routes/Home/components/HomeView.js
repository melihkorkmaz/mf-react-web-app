import React from 'react'
import Carousel from './Carousel';
import AboutImage from '../assets/about-2.png';
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <Carousel />
    <section className="container-fluid no-padding no-top-margin">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img alt="about" src={AboutImage} />
          </div>

          <div className="col-7 section-right-content">
            <div className="section-header left-header">
              <h3>Welcome to Silver Sands Pizza</h3>
              <h5>About Us</h5>
            </div>

            <div className="section-content">
              <p>When it comes to the freshest and most delicious pizza and casual Italian and Greek cuisine, Silver Sands Pizza is your best choice!</p>
              <p>Our convenient eateries in Milford and Stratford are known far and wide as THE place when craving stone oven-baked pizzas that are topped with the best quality ingredients. Plus, with a variety of crusts like thin crust, thick crust, whole wheat and Sicilian pizzas, there are plenty of choices to totally customize your meal. Try gourmet pizzas like the chicken Parm pizza or try a Silver Sands favorite like the Point Beach pizza with mashed polenta, bacon, cheddar and more.</p><p>We also offer catering and Mobile Wood Fired Pizza! No matter the size of the group you've got to feed, our friendly staff will dish up an unforgettable meal or bring the brick oven to you. The next time you're looking for a tasty meal, check out Silver Sands Pizza -- stop by or call for take-out or delivery (no delivery charge) today!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HomeView
