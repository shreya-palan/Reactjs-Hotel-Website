import React, { useEffect, useState } from 'react';
import '../SinglePage/singlepage.css';
import Navbar from '../Navbar';
import HeadTitle from '../HeadTitle/HeadTitle';
import { Link, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft, FaPhoneAlt } from 'react-icons/fa';
import Sdata from '../Destinations/Sdata';
import EmptyFile from '../EmptyFile/EmptyFile';


const SinglePage = () => {

  const {id} = useParams();
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))

    if(item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <Navbar />
      <HeadTitle />

      {item ? (

      

      <section className="single-page top">
        <div className="container">
          <Link to='/destination' className='primary-btn back'>
            <i><FaLongArrowAltLeft /></i> Go Back
          </Link>
          

          <article className="content flex">
            <div className="main-content">
              <img src={item.image} alt="" />
              <p>{item.desc}</p>
              
              <div className="para flex_space">
              <p>{item.sidepara}</p>
              
              </div>
              <h1>What is the {item.title} City?</h1>
              <p>{item.city}</p>
              

              {/*<div className="image grid1">
                <img src={item.paraImage_one} alt="" />
      </div>*/}
            </div>

            <div className="side-content">
              <div className="box">
                <h2>How can we help you?</h2>
                <p>{item.con}</p>
                <button className='outline-btn'>
                  <i><FaPhoneAlt /></i>
                  Contact Us
                </button>
              </div>
              
            </div>
          </article>
        </div>
      </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
