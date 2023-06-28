import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",zIndex:'100'}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",zIndex:'100'}}
        onClick={onClick}
      />
    );
  }



  const whatothersay = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="banner">

        <div className="banner-slide">
          <ul>
            <Slider {...settings}>
              <li>
                <a href="">
                  <img src="img/banner.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/banner.jpg" alt=""/>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/banner.jpg" alt=""/>
                </a>
              </li>

            </Slider>
          </ul>
        </div>

      </div>
      <div className="intro bg-sena">
        <div className="container">
          <div className="left">
            <h2>
              Welcome to
              <b>COZYNIBI HOTEL</b>
            </h2>
            <p>
              Belonging to the leading large real estate corporation in our country
              COZYNIBI, COZYNIBI hotel and resort apparatus has and are always
              expanding the scale and quality, reaching out to become one of the
              leading hotel systems in our country. COZYNIBI's hotel and resort
              system stretches across many famous tourist cities and provinces the
              voice of the earth meet the resort needs of a large number of domestic
              and foreign tourists.
            </p>
            <a className="btn-read">
              Read more
            </a>
          </div>
          <div className="right">
            <div className="list-intro">
              <ul>
                <li>
                  <a href="./accmoreE.html" className="item">
                    <div className="avt">
                      <img src="img/intro-1.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3>
                        <span>Double room</span>
                      </h3>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="item">
                    <div className="avt">
                      <img src="img/intro-2.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3>
                        <span>Triple room</span>
                      </h3>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="item">
                    <div className="avt">
                      <img src="img/intro-3.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3>
                        <span>Dorm room</span>
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="travel">
        <div className="container">
          <h2 className="titH2-a">Tours travel</h2>
          <div className="list-travel">
            <ul>
              <li>
                <div className="item">
                  <a href="" className="avt">
                    <img src="img/travel-1.jpg" alt="" />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="./travelBichDongE.html">
                        Tuyet Tinh Coc (Tinh Coc) - Hoa Lu - Bai Dinh
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="./travelBichDongE.html" className="avt">
                    <img src="img/travel-2.jpg" alt="" />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="">Phat Diem Cathedral - Kim Son</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="./travelBichDongE.html" className="avt">
                    <img src="img/travel-3.jpg" alt="" />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="">Bai Dinh Pagoda - Trang An Complex</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="./travelBichDongE.html" className="avt">
                    <img src="img/travel-4.jpg" alt="" />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="">Tam Coc - Trang An tourist area</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="./travelBichDongE.html" className="avt">
                    <img src="img/travel-5.jpg" alt="" />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="">Thai Vi Temple Festival - Ninh Binh</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="./travelBichDongE.html" className="avt">
                    <img src="img/travel-6.jpg" alt="" />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="">
                        Temple of King Dinh Tien Hoang in Gia Phuong commune
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="frs bg-abe">
        <div className="container">
          <div className="row">
            <div className="item-frs">
              <h2 className="titH2">Food Restaurant</h2>
              <div className="food-res">
                <div className="food-k">
                  <span />
                </div>
                <div className="slide">
                  <ul>
                    <Slider {...settings}>
                      <li>
                        <div className="item">
                          <a href="./menuE.html" className="avt">
                            <img src="img/food-res.jpg" alt="" />
                          </a>
                          <div className="desc">
                            <h3>
                              <a href="./menuE.html">Lasagne al Forno</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <a href="./menuE.html" className="avt">
                            <img src="img/food-denui.webp" alt="" />
                          </a>
                          <div className="desc">
                            <h3>
                              <a href="./menuE.html">Mountain goat</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <a href="./menuE.html" className="avt">
                            <img src="img/food-xoitrungkien.webp" alt="" />
                          </a>
                          <div className="desc">
                            <h3>
                              <a href="./menuE.html">Xoi trung kien</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <a href="./menuE.html" className="avt">
                            <img src="img/food-goicanhech.webp" alt="" />
                          </a>
                          <div className="desc">
                            <h3>
                              <a href="./menuE.html">Goi ca nhech</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <a href="./menuE.html" className="avt">
                            <img src="img/food-bunmoc.webp" alt="" />
                          </a>
                          <div className="desc">
                            <h3>
                              <a href="./menuE.html">Noodles grow</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <a href="./menuE.html" className="avt">
                            <img src="img/food-cakhogao.webp" alt="" />
                          </a>
                          <div className="desc">
                            <h3>
                              <a href="./menuE.html">Stew fish</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                    </Slider>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item-frs">
              <h2 className="titH2">Services</h2>
              <div className="services">
                <ul>
                  <li>
                    <div className="item-ser">
                      <a href="./serviceE.html" className="icon">
                        <img src="img/icon/ser-1.png" alt="" />
                      </a>
                      <h3>
                        <a href="./serviceE.html">Massage &amp; Sauna</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="item-ser">
                      <a href="./serviceE.html" className="icon">
                        <img src="img/icon/ser-2.png" alt="" />
                      </a>
                      <h3>
                        <a href="./serviceE.html">Charles Bar</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="item-ser">
                      <a href="./serviceE.html" className="icon">
                        <img src="img/icon/ser-3.png" alt="" />
                      </a>
                      <h3>
                        <a href="./serviceE.html">Wedding</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="item-ser">
                      <a href="./serviceE.html" className="icon">
                        <img src="img/icon/ser-4.png" alt="" />
                      </a>
                      <h3>
                        <a href="./serviceE.html">Meetings &amp; Events</a>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <h2 className="titH2-a">News highlights</h2>
          <div className="list-news" style={{ color: 'white' }}>
            <ul>
              <li>
                <div className="avt-cover">
                  <a href="" className="avt">
                    <img src="img/news-1.jpg" alt="" />
                  </a>
                </div>
                <h3>
                  <a


                    href="http://www.hanoimoi.com.vn/tin-tuc/Du-lich/961582/di-san-van-hoa-va-thien-nhien-the-gioi-trang-an-ninh-binh-dau-cham-xanh-tren-ban-do-du-lich#:~:text=V%C3%A0o%20n%C4%83m%202014%2C%20qu%E1%BA%A7n%20th%E1%BB%83,v%C3%A0%20%C4%91%E1%BB%8Ba%20ch%E1%BA%A5t%20%C4%91%E1%BB%8Ba%20m%E1%BA%A1o.">
                    Trang An Scenic Landscape Complex is recognized by UNESCO as a
                    World Cultural and Natural Heritage siteTrang An Scenic
                    Landscape Complex is recognized by UNESCO as a World Cultural
                    and Natural Heritage site
                  </a>
                </h3>
              </li>
              <li>
                <div className="avt-cover">
                  <a href="" className="avt">
                    <img src="img/news-2.jpg" alt="" />
                  </a>
                </div>
                <h3>
                  <a href="https://www.quangbinhtravel.vn/hang-son-doong.html#:~:text=Hang%20n%E1%BA%B1m%20s%C3%A1t%20bi%C3%AAn%20gi%E1%BB%9Bi,theo%20m%E1%BB%99t%20%C4%91%C6%B0%E1%BB%9Dng%20%C4%91%E1%BB%A9t%20g%C3%A3y.">
                    About Hang Son Doong, the world's largest cave in Vietnam
                  </a>
                </h3>
              </li>
              <li>
                <div className="avt-cover">
                  <a href="" className="avt">
                    <img src="img/news-3.jpg" alt="" />
                  </a>
                </div>
                <h3>
                  <a href="https://www.vntrip.vn/cam-nang/mon-ngon-dac-san-ninh-binh-28107">
                    List of 10 delicious specialties Ninh Binh must try
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wos bg-abe">
        <div className="container">
          <h2 className="titH2b">What other say?</h2>
          <div className="orther-say">
            <ul>
              <Slider {...whatothersay}>
                <li>
                  <div className="item">
                    <div className="wos-content">
                      <p>
                        Ninh Binh is the most beautiful holy land in the North of
                        Vietnam. In this area are the high green peaks of the Range
                        Christmas Mountain, but also dozens of mystical temples,
                        Buddhas and hidden scenes.
                      </p>
                    </div>
                    <div className="wos-user">
                      <div className="avt">
                        <img src="img/avt-1.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <b>John whick</b>
                        <p>Form Germany</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="wos-content">
                      <p>
                        We visited the largest Buddha statue in the world's largest
                        Bai Dinh pagoda complex. We also See the valley from Mua Cave,
                        take a river cruise in Tam Coc and climb the pagodas in Bich
                        Dong
                      </p>
                    </div>
                    <div className="wos-user">
                      <div className="avt">
                        <img src="img/avt-2.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <b>John abraham</b>
                        <p>Form Germany</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="wos-content">
                      <p>
                        Just take a picture of the majestic beauty of Vietnam! You are
                        a master at using it. If it's a sign What does a hostel look
                        like in Vietnam? Love the ancient temples
                      </p>
                    </div>
                    <div className="wos-user">
                      <div className="avt">
                        <img src="img/avt-1.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <b>John abraham</b>
                        <p>Form Germany</p>
                      </div>
                    </div>
                  </div>
                </li>
              </Slider>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="item">
              <div className="tit-F">
                <span>Contact Us</span>
              </div>
              <div className="loc">
                <p>
                  <a href="https://www.google.com/maps/place/90+B%E1%BA%BFn+Ph%C3%A0,+H%C3%A0+C%E1%BA%A7u,+H%C3%A0+%C4%90%C3%B4ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9671036,105.7828197,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ad2a7e2a678b:0x3f15860c49177bda!8m2!3d20.9671036!4d105.7850137!16s%2Fg%2F11p67fhv78?hl=vi-VN">
                    90 Ben Pha, Ha Cau, Ha Dong, Ha Noi
                  </a>
                </p>
              </div>
              <div className="phone">
                <p>
                  <a href="tel:02437835639">(+84)368966992</a>
                </p>
              </div>
              <div className="mail">
                <p>info@adcvietnam.net</p>
              </div>
              <div className="web">
                <a href="">www.adcvietnam.net</a>
              </div>
            </div>
            <div className="item">
              <div className="tit-F">
                <span>Accommodation</span>
              </div>
              <ul className="menu-F">
                <li>
                  <a href="./accmoreE.html">Double Room</a>
                </li>
                <li>
                  <a href="./accmoreE.html">Triple Room</a>
                </li>
                <li>
                  <a href="./accmoreE.html">Dorm Room</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <div className="tit-F">
                <span>Service</span>
              </div>
              <ul className="menu-F">
                <li>
                  <a href="./serviceE.html">Massage &amp; Sauna</a>
                </li>
                <li>
                  <a href="./serviceE.html">Charles Bar</a>
                </li>
                <li>
                  <a href="./serviceE.html">Wedding</a>
                </li>
                <li>
                  <a href="./serviceE.html">Meetings &amp; Events</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <div className="tit-F">
                <span>Newsletter</span>
              </div>
              <div className="form-letter">
                <form action="">
                  <input type="text" placeholder="Enter your email" />
                  <button />
                </form>
              </div>
              <div className="social-F">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="kwang-d">
            <div className="left">
              <ul>
                <li>
                  <a href="./homeE.html">Home</a>
                </li>
                <li>
                  <a href="./aboutusE.html">About Us</a>
                </li>
                <li>
                  <a href="./menuE.html">Food Restaurant</a>
                </li>
                <li>
                  <a href="./travelE.html">Tour Travel</a>
                </li>
                <li>
                  <a href="./newsE.html">News</a>
                </li>
                <li>
                  <a href="./galleryE.html">Gallery</a>
                </li>
                <li>
                  <a href="./contactE.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <p>Copyright © COZYNIBI HOTEL. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <div id="fix-hotline">
        <a href="">
          <img src="img/icon/hotline-fix.png" alt="" />
        </a>
      </div>
      <div className="back-top">
        <img src="img/icon/back-top.png" alt="" />
      </div>
    </>


  )
}

export default Home