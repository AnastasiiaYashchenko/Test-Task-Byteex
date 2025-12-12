import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "http://localhost:1337/uploads/Lucille_crewneck_sweatshirt_blush_and_ayla_sleep_jogger_sepia_rose_2_1_caada1ab34.png",
    "http://localhost:1337/uploads/Lucille_crewneck_sweatshirt_blush_and_ayla_sleep_jogger_sepia_rose_2_2_6b8e2daff4.png",

    "http://localhost:1337/uploads/Lucille_crewneck_sweatshirt_blush_and_ayla_sleep_jogger_sepia_rose_2_2_6b8e2daff4.png",
    "http://localhost:1337/uploads/Lucille_crewneck_sweatshirt_blush_and_ayla_sleep_jogger_sepia_rose_2_2_6b8e2daff4.png",
    "http://localhost:1337/uploads/Lucille_crewneck_sweatshirt_blush_and_ayla_sleep_jogger_sepia_rose_2_2_6b8e2daff4.png",
  ];
  return (
    <>
      <article className="header-sales">
        <p>
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders{" > "}$200 | easy 45 day return window.
        </p>
      </article>
      <article className="header">
        <img
          src="http://localhost:1337/uploads/LOGO_1_4625ac7a13.png"
          className="logo"
        />
        <div className="header-location">
          <div className="header-content">
            <h1>Don’t apologize for being comfortable.</h1>
            <ul>
              <li className="header-desc">
                <img src="http://localhost:1337/uploads/Component_27_1_028b7c38c8.png" />
                <span>Beautiful, comfortable loungewear for day or night.</span>
              </li>
              <li className="header-desc">
                <img src="http://localhost:1337/uploads/Component_4_c4a035cf06.png" />
                <span>No wasteful extras, like tags or plastic packaging.</span>
              </li>
              <li className="header-desc">
                <img src="http://localhost:1337/uploads/Component_28_3f583f08d6.png" />
                <span>
                  Our signature fabric is incredibly comfortable — unlike
                  anything you’ve ever felt.
                </span>
              </li>
            </ul>
            <button className="button">Customize Your Outfit ⮕</button>
          </div>

          <div className="header-image">
            <img src="http://localhost:1337/uploads/Group_6034_0dddbc31d6.png" />
          </div>
        </div>
        <div>
          <section className="review">
            <div className="review-card">
              <div className="review-header">
                <img
                  src="http://localhost:1337/uploads/color_wheel_285714bfdb.png"
                  alt="avatar"
                  className="review-avatar"
                />

                <div className="review-meta">
                  <div className="review-name">
                    Amy P.
                    <img
                      src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                      alt="star"
                      className="star"
                    />
                    <span className="review-label">
                      One of 500+ 5 Star Reviews Online
                    </span>
                  </div>
                </div>
              </div>

              <p className="review-text">
                Overjoyed with my Loungewear set. I have the jogger and the
                sweatshirt. Quality product on every level. From the compostable
                packaging, to the supplied washing bag, even the garments smells
                like fresh herbs when I first held them.
              </p>
            </div>
          </section>
        </div>
      </article>
      <article className="as-seen-in">
        <div className="brand-logos">
          <h3>as seen in</h3>
          <div className="brand-logos-img">
            <img
              src="http://localhost:1337/uploads/Group_4531_03b94c3369.png"
              alt=""
            />
          </div>
        </div>
        <section className="advantages">
          <h2>Loungewear you can be proud of.</h2>
          <div className="advantages-container">
            <div>
              <ul className="adv-list">
                <li>
                  <img
                    src="http://localhost:1337/uploads/Component_4_c4a035cf06.png"
                    alt=""
                  />
                  <div className="adv-li-p">
                    <h3>Ethically sourced.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce lobortis sapien facilisis tincidunt pellentesque. In
                      eget ipsum et felis finibus consequat.
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="http://localhost:1337/uploads/Component_11_05deeb6574.png"
                    alt=""
                  />
                  <div className="adv-li-p">
                    <h3>Responsibly made.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce lobortis sapien facilisis tincidunt pellentesque. In
                      eget ipsum et felis finibus consequat.
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="http://localhost:1337/uploads/Component_4_c4a035cf06.png"
                    alt=""
                  />
                  <div className="adv-li-p">
                    <h3>Made for living in.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce lobortis sapien facilisis tincidunt pellentesque. In
                      eget ipsum et felis finibus consequat.
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="http://localhost:1337/uploads/Component_28_3f583f08d6.png"
                    alt=""
                  />
                  <div className="adv-li-p">
                    <h3>Unimaginably comfortable.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce lobortis sapien facilisis tincidunt pellentesque. In
                      eget ipsum et felis finibus consequat.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="product-gallery">
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="main-slider"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img src={src} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                modules={[Navigation, Thumbs]}
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={5}
                spaceBetween={10}
                watchSlidesProgress={true}
                className="thumbs-slider"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img src={src} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </article>
      <article className="best-self">
        <div className="container best-self-inner">
          <img
            src="http://localhost:1337/uploads/Component_27_ddfdfa6a36.png"
            alt=""
            className="best-self-image"
          />

          <div className="best-self-content">
            <h2>Be your best self.</h2>
            <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
            <p>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>
            <p>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>
            <p>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>
            <p> Cras mattis varius mollis.</p>
            <button className="button">Customize Your Outfit</button>
          </div>
        </div>
      </article>
      <article className="comfort">
        <div className="container">
          <h2>Comfort made easy</h2>

          <div className="visible-for-desctop">
            <div className="comfort-grid">
              <div className="comfort-item">
                <img
                  src="http://localhost:1337/uploads/eco_store_svgrepo_com_1_3b460399e7.png"
                  alt=""
                />
                <h3>You save.</h3>
                <p>Browse our comfort sets and save 15% when you bundle.</p>
              </div>
              <div className="comfort-item colored">
                <img
                  src="http://localhost:1337/uploads/Group_4402_b4423c02ea.png"
                  alt=""
                />
                <h3>We ship.</h3>
                <p>
                  We ship your items within 1-2 days of receiving your order.
                </p>
              </div>
              <div className="comfort-item">
                <img
                  src="http://localhost:1337/uploads/day_night_sun_moon_cycle_svgrepo_com_1_4e1c9dbf0b.png"
                  alt=""
                />
                <h3>You enjoy!</h3>
                <p>
                  Wear hernest around the house, out on the town, or in bed.
                </p>
              </div>
            </div>
          </div>
          <div className="visible-for-mobile carousel">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="comfort-item">
                    <img
                      src="http://localhost:1337/uploads/eco_store_svgrepo_com_1_3b460399e7.png"
                      alt=""
                    />
                    <h3>You save.</h3>
                    <p>Browse our comfort sets and save 15% when you bundle.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="comfort-item colored">
                    <img
                      src="http://localhost:1337/uploads/Group_4402_b4423c02ea.png"
                      alt=""
                    />
                    <h3>We ship.</h3>
                    <p>
                      We ship your items within 1-2 days of receiving your
                      order.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="comfort-item">
                    <img
                      src="http://localhost:1337/uploads/day_night_sun_moon_cycle_svgrepo_com_1_4e1c9dbf0b.png"
                      alt=""
                    />
                    <h3>You enjoy!</h3>
                    <p>
                      Wear hernest around the house, out on the town, or in bed.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="location">
            <button className="button">Customize Your Outfit</button>
            <br />
            <img
              src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "rgba(130, 130, 130, 1)" }}
            >
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
      </article>
      <article className="gallery">
        <div className="container">
          <h2>What are our fans saying?</h2>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat. Fusce non nibh luctus.
          </p>

          <div className="gallery-grid">
            <img
              src="http://localhost:1337/uploads/Group_4522_6f4b2077e9.png"
              alt=""
            />
          </div>

          <div className="reviews">
            <div className="reviews-wrapper">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="review-card">
                      <div style={{ display: "flex" }}>
                        <img
                          src="http://localhost:1337/uploads/color_wheel_686375b5f7.png"
                          alt=""
                          className="review-user"
                        />
                        <div>
                          <img
                            src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                            alt=""
                          />
                          <p style={{ marginTop: "0px" }}>Jane, S.</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sed sollicitudin dolor, non sodales justo.
                        Aenean eget aliquet mi.
                      </p>
                    </div>

                    <div className="review-card">
                      <div style={{ display: "flex" }}>
                        <img
                          src="http://localhost:1337/uploads/color_wheel_686375b5f7.png"
                          alt=""
                          className="review-user"
                        />
                        <div>
                          <img
                            src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                            alt=""
                          />
                          <p style={{ marginTop: "0px" }}>Jane, S.</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sed sollicitudin dolor, non sodales justo.
                        Aenean eget aliquet mi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Pellentesque sed
                        sollicitudin dolor, non sodales.
                      </p>
                    </div>

                    <div className="review-card">
                      <div style={{ display: "flex" }}>
                        <img
                          src="http://localhost:1337/uploads/color_wheel_686375b5f7.png"
                          alt=""
                          className="review-user"
                        />
                        <div>
                          <img
                            src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                            alt=""
                          />
                          <p style={{ marginTop: "0px" }}>Jane, S.</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sed sollicitudin dolor, non sodales justo.
                        Aenean eget aliquet mi.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="review-card">
                      <div style={{ display: "flex" }}>
                        <img
                          src="http://localhost:1337/uploads/color_wheel_686375b5f7.png"
                          alt=""
                          className="review-user"
                        />
                        <div>
                          <img
                            src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                            alt=""
                          />
                          <p style={{ marginTop: "0px" }}>Jane, S.</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sed sollicitudin dolor, non sodales justo.
                        Aenean eget aliquet mi.
                      </p>
                    </div>

                    <div className="review-card">
                      <div style={{ display: "flex" }}>
                        <img
                          src="http://localhost:1337/uploads/color_wheel_686375b5f7.png"
                          alt=""
                          className="review-user"
                        />
                        <div>
                          <img
                            src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                            alt=""
                          />
                          <p style={{ marginTop: "0px" }}>Jane, S.</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sed sollicitudin dolor, non sodales justo.
                        Aenean eget aliquet mi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Pellentesque sed
                        sollicitudin dolor, non sodales.
                      </p>
                    </div>

                    <div className="review-card">
                      <div style={{ display: "flex" }}>
                        <img
                          src="http://localhost:1337/uploads/color_wheel_686375b5f7.png"
                          alt=""
                          className="review-user"
                        />
                        <div>
                          <img
                            src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
                            alt=""
                          />
                          <p style={{ marginTop: "0px" }}>Jane, S.</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sed sollicitudin dolor, non sodales justo.
                        Aenean eget aliquet mi.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="location">
            <button className="button">Customize Your Outfit</button>
            <br />
            <img
              src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "rgba(130, 130, 130, 1)" }}
            >
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
      </article>
      <section className="faq">
        <div className="container-faq">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <h2 className="faq-h2">Frequently asked questions.</h2>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  lorem ipsum dolor sit amet
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div
                  className="accordion-body"
                  style={{ color: "rgba(103, 104, 105, 1)" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  lorem ipsum dolor sit amet
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  lorem ipsum dolor sit amet
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  lorem ipsum dolor sit amet
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  lorem ipsum dolor sit amet
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-heading"
              >
                <div className="accordion-body">lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  lorem ipsum dolor sit amet
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>

          <div className="faq-image">
            <img
              src="http://localhost:1337/uploads/Component_5_bc26ed7bef.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="impact">
        <h1>Our total green impact</h1>
        <div className="container impact-grid">
          <div className="impact-item">
            <img
              src="http://localhost:1337/uploads/Component_6_23f64f2147.png"
              alt=""
            />
            <h3>3,927 kg</h3>
            <p>of CO2 saved</p>
          </div>
          <div className="vertical-line"></div>
          <div className="impact-item">
            <img
              src="http://localhost:1337/uploads/Component_7_aec19a6cb6.png"
              alt=""
            />
            <h3>2,546,167 days</h3>
            <p>of drinking water saved</p>
          </div>
          <div className="vertical-line"></div>
          <div className="impact-item">
            <img
              src="http://localhost:1337/uploads/Component_8_06b06c99b2.png"
              alt=""
            />
            <h3>7,321 kWh</h3>
            <p>of energy saved</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="container" style={{ alignItems: "center" }}>
          <h2>Find something you love.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>

          <div className="footer-gallery">
            <img
              src="http://localhost:1337/uploads/Group_6037_2eae160254.png"
              alt=""
            />
          </div>

          <button className="button">Customize Your Outfit</button>
          <div className="visible-for-desctop">
            <img
              src="http://localhost:1337/uploads/Group_6035_856d5e329e.png"
              alt=""
            />
          </div>
          <div className="visible-for-mobile">
            <img
              src="http://localhost:1337/uploads/Group_3515_4e248a619a.png"
              alt=""
            />
            <span
              style={{ marginLeft: "10px", color: "rgba(130, 130, 130, 1)" }}
            >
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-location">
            <img
              src="http://localhost:1337/uploads/Group_4525_c5e858c88e.png"
              alt=""
            />
            <p>FREE Shipping on Orders over $200</p>
          </div>
          <div className="vertical-line"></div>
          <div className="footer-location">
            <img
              src="http://localhost:1337/uploads/Component_22_53fb497a9c.png"
              alt=""
            />
            <p>Over 500+ 5 Star Reviews Online</p>
          </div>
          <div className="vertical-line"></div>
          <div className="footer-location">
            <img
              src="http://localhost:1337/uploads/Component_23_06e78edf02.png"
              alt=""
            />
            <p>Made ethically and responsibly.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
