import React from 'react'
import Tdata from './Tdata';
import Card from './Card';
import '../Testimonials/testimonial.css';

const AllItem = () => {
  return (
    <>
      <section className="testimonial mtop">
        <div className="conatiner grid1">
            {Tdata.map((value, index) => {
                return <Card key={index} { ...value}/>
            })}
        </div>
      </section>
    </>
  )
}

export default AllItem
