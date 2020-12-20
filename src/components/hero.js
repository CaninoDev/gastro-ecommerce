import React from "react"
import Background from "../images/background.png"

const Hero = () => {
  return (
    <section id="hero" data-aos="zoom-in" data-aos-delay="100">
      <div
        className="carousel-item active"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="carousel-container">
          <div className="carousel-content">
            <h2 className="animate__animated animate__fadeInDown">
              <span className="welcome">Delicious</span> Restaurant
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <div>
              <a
                href="#menu"
                className="btn-menu animate__animated animate__fadeInUp scrollto"
              >
                Our Menu
              </a>
              <a
                href="#book-a-table"
                className="btn-book animate__animated animate__fadeInUp scrollto"
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
