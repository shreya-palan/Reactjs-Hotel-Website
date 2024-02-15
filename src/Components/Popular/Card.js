import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaStar, FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import PopData from './PopData';
import Slider from "react-slick";

const Card = () => {

    const SampleNextArrow = (props) => {
        const {onClick} = props
        return(
            <div className="control-btn" onClick={onClick}>
                <button className='next'>
                    <i><FaLongArrowAltRight /></i>
                </button>
            </div>
        )
    }

    const SamplePrevArrow = (props) => {
        const {onClick} = props
        return(
            <div className="control-btn" onClick={onClick}>
                <button className='prev'>
                    <i><FaLongArrowAltLeft /></i>
                </button>
            </div>
        )
    }
     
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
          ]
        }
    return (
        <>
            <Slider {...settings}>
            {
                PopData.map((value) => {
                    return (

                        <div className="cards">
                            <div className="item">
                                <div className="image">
                                    <img src={value.image} alt="" />
                                    <i><FaMapMarkerAlt /></i>
                                    <label>{value.country}</label>
                                </div>
                                <div className="rate">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                </div>
                                <div className="details">
                                    <h2>{value.name}</h2>
                                    
                                    <h3>
                                        {value.price} / <span>Per Night</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    );
       })}
       </Slider>
        </>
    )
}

export default Card
