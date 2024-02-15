import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import '../Testimonials/testimonial.css';

const Card = (props) => {
  return (
    <>
      <div className="box">
        <i><FaQuoteLeft /></i>
        <div className="para">
            <p>{props.desc}</p>
        </div>
        <hr />
        <div className="deatils flex">
            <div className="img">
                <img src={props.profile} alt="" />
            </div>
            <div className="name">
                <h3>{props.name}</h3>
                <span>{props.post}</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
