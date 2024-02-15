import React from 'react';
import Navbar from '../Navbar';
import AboutCard from './AboutCard';
import { FaLongArrowAltRight } from 'react-icons/fa';
import HeadTitle from '../HeadTitle/HeadTitle';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
      <Navbar />
      <HeadTitle />
      <section className='about top'>
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Blog</span>
            </h1>
            <p>Discover the heartbeat of our hotel through our blog, where we bring you engaging and informative content to enhance your travel experience.</p>
            <p>Whether you're a seasoned traveler or planning your first getaway, our blog is a treasure trove of insights, tips, and stories designed to ignite your wanderlust and make your stay truly memorable.</p>
            <Link to='/Blog'>
            <button className="secondary-btn">
              Explore More <i><FaLongArrowAltRight /></i>
            </button>
            </Link>
          </div>
          <div className="row image">
            <img src="/images/about-img-1.jpg" alt="about-img" />
          </div>
        </div>
      </section>

    </>
  )
}

export default About
