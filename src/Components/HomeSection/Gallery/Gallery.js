import React from 'react';
import Gdata from './Gdata';
import '../Gallery/gallery.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
  return (
    <>
      <section className="collection">
        <div className="container top">
            <Slider { ...settings}>
            {Gdata.map((value) =>{
                return (
                    <div className="box">
                        <img src={value.cover} alt="" />
                    </div>
                )
            })}
            </Slider>
        </div>
      </section>
    </>
  )
}

export default Gallery
