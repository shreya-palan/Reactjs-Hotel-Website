import React from 'react';
import '../About/about.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex-space">
        <div className="row row1">
            <h4>About Us</h4>
            <h1>
                Experience <span>THE GREATEST</span> for your holidays
            </h1>
            <p>A place where you can forget about the city and reconnect with nature by enjoying in your dream vacation</p>
            <p>The team of the Nyumbani luxury hotel welcomes you.Start relaxing your soul and enjoy your stay</p>
            <Link to='/destination'>
            <button className="secondary-btn">
            Explore More <i><FaLongArrowAltRight/></i>
            </button>
            </Link>
        </div>
        
    </div>
    </>
  )
}

export default AboutCard
