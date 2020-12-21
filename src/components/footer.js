import React from "react"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Tribeca Grill</h3>
                <p>
                  555 Broadway <br />
                  NY, NY 10505, USA
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 555 555 5555
                  <br />
                  <strong>Email:</strong> info@tribecagrill.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Menu</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Directions</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
              <form action="" method="post">
                <input type="email" name="email"></input>
                <input type="submit" value="Subscribe"></input>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Tribeca Grill</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
