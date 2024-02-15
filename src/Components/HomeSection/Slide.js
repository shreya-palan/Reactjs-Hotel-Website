import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import Data from './Data'
import '../HomeSection/home.css';

const Slide = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

  return (
    <>
      <section className="slider">
        <div className="control-btn">
            <button className="prev" onClick={prevSlide}>
                <i><FaCaretLeft/></i>
            </button>
            <button className="next" onClick={nextSlide}>
                <i><FaCaretRight/></i>
            </button>
        </div>
      

      {Data.map((slide, index) => {
        return(
            <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && <img src={slide.images} alt='home image' />}
            </div>
        )
      })}
      </section>
      
      <section className="slide-form">
        <div className="container">
            <h2>Enjoy Your Holiday</h2>
            <span>Search and Book Hotel</span>

            <form action="">
                <input type="text" placeholder='Search City' id='' />
                <div className="flex_space">
                    <input type="date" placeholder='Ckeck In' />
                    <input type="date" placeholder='Ckeck Out' />
                </div>
                <div className="flex_space">
                    <input type="number" placeholder='Adult(s)(+18)' />
                    <input type="number" placeholder='Children(0 - 17)' />
                </div>
                <input type="number" placeholder='Rooms' />
                <input type="Submit" value='Search' className='submit' />
            </form>
        </div>
      </section>
    </>
  )
}

export default Slide
