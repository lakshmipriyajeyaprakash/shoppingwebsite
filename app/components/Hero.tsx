"use client"
import React from 'react';
import Slider from 'react-slick';
import Slides from './Slides';
const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseonHover: false,
    }
    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Collection",
            mainTitle: "WOMEN'S BRAND NEW FASHION OFFER",
            price: "$20",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "CLASSY SUNGLASSES",
            price: "$10",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SPRING OFFER",
            price: "$15",
        },
    ];
  return (
      <div>
          <div className='container pt-6 lg:pt-0'>
              <Slider {...settings}>
                  {slideData.map((item) => (<Slides key={item.id}
                      img={item.img}
                      mainTitle={item.mainTitle}
                      title={item.title}
                      price={item.price}
                  ></Slides>))}
              </Slider>
          </div>
      </div>
  )
}

export default Hero