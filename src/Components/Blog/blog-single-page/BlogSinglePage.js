import Navbar from '../../Navbar';
import HeadTitle from '../../HeadTitle/HeadTitle';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft, FaPlayCircle } from 'react-icons/fa';
import Sdata from '../../Destinations/Sdata';
import EmptyFile from '../../EmptyFile/EmptyFile';
import BlogData from '../../Blog/BlogData';



const BlogSinglePage = () => {
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
          <Link to='/blog' className='primary-btn back'>
            <i><FaLongArrowAltLeft /></i> Go Back
          </Link>
          
          <article className="content flex">
            <div className="main-content">
              <img src={item.cover} alt="" />
              
              
              <div className="category flex_space">
              <span>{item.date}</span>
              <label>{item.category}</label>
              </div>

              <h1>{item.title}</h1>
              <p>{item.para}</p>
              <p>{item.desc}</p>
               

              <div className="para flex_space">
              <p>{item.para}</p>
              <p>{item.para}</p>
              </div>
            </div>

            <div className="side-content">
              <div className="category-list">
                <h2>Category</h2>
                <hr />
                <ul>
                    {
                        BlogData.map((item) =>{
                            return(
                                <li>
                                    <i><FaPlayCircle /></i>
                                    {item.category}
                                </li>
                            )
                        })
                    }
                </ul>
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

export default BlogSinglePage
