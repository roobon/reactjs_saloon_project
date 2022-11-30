import React from "react";

export default function Main() {
  return (
    <>
      <div className="loader_bg">
        <div className="loader">
          <img src="assets/images/loading.gif" alt="" />
        </div>
      </div>
      <div className="wrapper">
        <div className="sidebar">
          <nav id="sidebar">
            <div id="dismiss">
              <i className="fa fa-arrow-left"></i>
            </div>

            <ul className="list-unstyled components">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="service.html">Service</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>

              <li>
                <a href="barbers.html">Our Barbers</a>
              </li>

              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="content">
          <header>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="full">
                    <a className="logo" href="index.html">
                      <img src="assets/images/logo.png" alt="#" />
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="full">
                    <div className="right_header_info">
                      <ul>
                        <li className="dinone">
                          <img
                            style={{ marginRight: "15px", marginLeft: "15px" }}
                            src="assets/images/phone_icon.png"
                            alt="#"
                          />
                          <a href="#">987-654-3210</a>
                        </li>
                        <li className="dinone">
                          <img
                            style={{ marginRight: "15px" }}
                            src="assets/images/mail_icon.png"
                            alt="#"
                          />
                          <a href="#">demo@gmail.com</a>
                        </li>

                        <li className="dinone">
                          <img
                            style={{ marginRight: "15px" }}
                            src="assets/images/search_icon.png"
                            alt="#"
                          />
                        </li>
                        <li className="button_user">
                          {" "}
                          <a className="button" href="#">
                            Book now
                          </a>
                        </li>

                        <li>
                          <button type="button" id="sidebarCollapse">
                            <a href="#">MENU</a>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="slider_section banner_bg">
            <img src="assets/images/banner.jpg" />
            <div className="container">
              <div className="text_box">
                <span>Stylish Hair</span>
                <h1>
                  Cutting
                  <br />
                  for New Look
                </h1>
                <a href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>

          <div id="about" className="about">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="about_box">
                    <span>Welcome to Our Shop</span>
                    <h2>
                      About<strong className="white"> Our Salon</strong>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many deskt op publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="about_img">
                    <figure>
                      <img src="assets/images/about_img.png" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="service" className="service">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="ourheading">
                    <h2>
                      Our<strong className="white_ll"> service</strong>
                    </h2>
                    <span>
                      {" "}
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis n
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser1.png" />
                              </figure>
                              <h3>Clean Shave</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser.png" />
                              </figure>
                              <h3> Haircut Styles</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser3.png" />
                              </figure>
                              <h3>Face Masking</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser1.png" />
                              </figure>
                              <h3>Clean Shave</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser.png" />
                              </figure>
                              <h3> Haircut Styles</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser3.png" />
                              </figure>
                              <h3>Face Masking</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser1.png" />
                              </figure>
                              <h3>Clean Shave</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser.png" />
                              </figure>
                              <h3> Haircut Styles</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service_box">
                              <figure>
                                <img src="assets/images/ser3.png" />
                              </figure>
                              <h3>Face Masking</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur cing
                                elit, sed do eiusmod tempor
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="ourheading">
                    <h2>
                      Pricing<strong className="white"> Table</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mar_bottom">
                  <div className="pricing_img">
                    <figure>
                      <img src="assets/images/vvv.png" alt="#" />
                    </figure>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pad_left">
                  <div className="pricing_box">
                    <div className="list">
                      <ul>
                        <li>
                          <span className="float-left">Haircuts</span>
                          <span className="float-right">$ 35</span>
                        </li>
                        <li>
                          <span className="float-left">Skin Fade</span>
                          <span className="float-right">$ 40</span>
                        </li>
                        <li>
                          <span className="float-left">Buzz Cut</span>
                          <span className="float-right">$ 30</span>
                        </li>
                        <li>
                          <span className="float-left">
                            classNameic Haircut
                          </span>
                          <span className="float-right">$ 35</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span className="float-left">Haircuts</span>
                          <span className="float-right">$ 35</span>
                        </li>
                        <li>
                          <span className="float-left">Stache Trim</span>
                          <span className="float-right">$ 35</span>
                        </li>
                        <li>
                          <span className="float-left">Beard Trim</span>
                          <span className="float-right">$ 35</span>
                        </li>
                        <li>
                          <span className="float-left">Colouring</span>
                          <span className="float-right">$ 50</span>
                        </li>
                      </ul>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opening">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="ourheading">
                        <h2>
                          Opening<strong className="white"> Times</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="opening_bg">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="times">
                          <ul>
                            <li>
                              <span>Monday</span>
                              <span className="float-right">
                                9:00am <strong className="bbbb">9:00pm</strong>
                              </span>
                            </li>
                            <li>
                              <span>Tuesday </span>
                              <span className="float-right">
                                9:00am <strong className="bbbb">9:00pm</strong>
                              </span>
                            </li>
                            <li>
                              <span>Wednesday</span>
                              <span className="float-right">
                                9:00am <strong className="bbbb">9:00pm</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="times">
                          <ul>
                            <li>
                              <span>Thursday </span>
                              <span className="float-right">
                                9:00am <strong className="bbbb">9:00pm</strong>
                              </span>
                            </li>
                            <li>
                              <span>Friday</span>
                              <span className="float-right">
                                9:00am <strong className="bbbb">9:00pm</strong>
                              </span>
                            </li>
                            <li>
                              <span>Saturday</span>
                              <span className="float-right">
                                9:00am <strong className="bbbb">9:00pm</strong>
                              </span>
                            </li>
                            <li>
                              <span>Sunday</span>
                              <span className="float-right">Close</span>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="resip_section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="ourheading">
                      <h2>
                        Our<strong className="white"> Barbers</strong>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="product_blog_img">
                          <img src="assets/images/1.png" alt="#" />
                        </div>
                        <div className="product_blog_cont">
                          <h3>Jone due</h3>
                          <h4>Haircutte</h4>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product_blog_img">
                          <img src="assets/images/2.png" alt="#" />
                        </div>
                        <div className="product_blog_cont">
                          <h3>Jne due</h3>
                          <h4>Haircutte</h4>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product_blog_img">
                          <img src="assets/images/3.png" alt="#" />
                        </div>
                        <div className="product_blog_cont">
                          <h3>Jkne due</h3>
                          <h4>Haircutte</h4>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product_blog_img">
                          <img src="assets/images/1.png" alt="#" />
                        </div>
                        <div className="product_blog_cont">
                          <h3>Jone due</h3>
                          <h4>Haircutte</h4>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product_blog_img">
                          <img src="assets/images/2.png" alt="#" />
                        </div>
                        <div className="product_blog_cont">
                          <h3>Jne due</h3>
                          <h4>Haircutte</h4>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product_blog_img">
                          <img src="assets/images/3.png" alt="#" />
                        </div>
                        <div className="product_blog_cont">
                          <h3>Jkne due</h3>
                          <h4>Haircutte</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div id="contact" className="contact">
              <div className="container">
                <div className="row">
                  <div className=" col-md-12">
                    <div className="title">
                      <h2>
                        Request A<strong className="white"> Call Back</strong>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <form className="main_form">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <input
                            className="form-control"
                            placeholder="Your Name"
                            type="text"
                            name="Your Name"
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <input
                            className="form-control"
                            placeholder="Phone Number"
                            type="text"
                            name="Email"
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="text"
                            name=" Email"
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <input
                            className="form-control"
                            placeholder="Date"
                            type="date"
                            name=" Date"
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <textarea
                            className="textarea"
                            placeholder="Message"
                            type="text"
                            name="Message"
                          ></textarea>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <button className="send">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="img-box">
                      <figure>
                        <img src="assets/images/img.jpg" alt="img" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end contact --> */}
            {/* <!-- footer --> */}
            <fooetr>
              <div className="footer">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="footer_logo">
                        <a href="index.html">
                          <img src="assets/images/logo1.png" alt="logo" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="address">
                        <h3>address</h3>
                        <p>
                          Address: 73 Canal Street, New York, NY
                          <br /> Tel: +1 123 456 789
                          <br /> Fax: +1 123 456 789
                          <br /> Email: support@demo.com
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <ul className="lik">
                        <li>
                          {" "}
                          <img src="assets/images/fb.png" alt="#" />
                        </li>
                        <li>
                          {" "}
                          <img src="assets/images/tw.png" alt="#" />
                        </li>
                        <li>
                          {" "}
                          <img src="assets/images/you.png" alt="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <div className="container">
                    <p>
                      © 2019 All Rights Reserved.{" "}
                      <a href="https://html.design/"> Free Html Templates</a>
                    </p>
                  </div>
                </div>
              </div>
            </fooetr>
            {/* <!-- end footer --> */}
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
}
